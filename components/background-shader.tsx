"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = window.innerWidth || 1280;
      const h = window.innerHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    syncSize();
    window.addEventListener("resize", syncSize);

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
          vec2 uv = v_texCoord;
          
          // Tech-noir background base
          vec3 color = vec3(0.02, 0.03, 0.05);
          
          // Moving grid
          vec2 grid_uv = fract(uv * 30.0 + vec2(0.0, u_time * 0.05));
          float grid = smoothstep(0.01, 0.0, grid_uv.x) + smoothstep(0.01, 0.0, grid_uv.y);
          color += grid * 0.03 * vec3(0.02, 0.7, 0.8);
          
          // Mouse glow effect
          vec2 mouse_uv = u_mouse / u_resolution;
          float dist = length(uv - mouse_uv);
          float glow = smoothstep(0.4, 0.0, dist) * 0.08;
          color += glow * vec3(0.06, 0.84, 0.95);

          // Subtle scanlines
          float scanline = sin(uv.y * 400.0) * 0.02;
          color -= scanline;
          
          // Vignette
          float vignette = 1.0 - length(uv - 0.5) * 0.8;
          color *= vignette;
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    }

    const vertShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", syncSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] opacity-40">
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
