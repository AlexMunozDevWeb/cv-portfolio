import { GraduationCap } from "lucide-react";
import type {
  MenuItem,
  bioParagraph,
  Experience,
  Formation,
  Project,
} from "../types/";

export const menuItems: MenuItem[] = [
  { id: 1, label: "Inicio", href: "#hero" },
  { id: 4, label: "Experiencia", href: "#experience" },
  { id: 2, label: "Formación", href: "#formation" },
  { id: 3, label: "Skills", href: "#skills" },
  { id: 5, label: "Proyectos", href: "#projects" },
];

export const bioParagraphs: bioParagraph[] = [
  {
    paragraph:
      "¡Hola! Soy desarrollador web especializado en crear soluciones digitales funcionales, escalables y fáciles de mantener. Cuento con más de 15 años de experiencia profesional y más de seis años dedicados al desarrollo web.",
  },
  {
    paragraph:
      "Trabajo principalmente con JavaScript, TypeScript, PHP, HTML, CSS, SCSS, Tailwind CSS y WordPress, desarrollando temas, plugins y aplicaciones web a medida. Me gusta escribir código limpio, reutilizable y optimizado, siempre con un enfoque en el rendimiento y la experiencia de usuario.",
  },
  {
    paragraph:
      "Actualmente continúo ampliando mis conocimientos en React y Next.js, mientras desarrollo proyectos que me permiten seguir creciendo profesionalmente.",
  },
  {
    paragraph:
      "Entre otros, a lo largo de mi trayectoria también he trabajado en integraciones de pasarelas de pago, desarrollo de API REST, integración con CRM, aplicaciones de inventario, maquetación avanzada y optimización de proyectos web.",
  },
  {
    paragraph:
      "Disfruto resolviendo problemas, aprendiendo nuevas tecnologías y colaborando en equipos para crear productos de calidad que aporten valor.",
  },
  {
    paragraph:
      "Fuera del trabajo, suelo disfrutar jugando al pádel o entrenando en el gimnasio.",
  },
];

export const experiences: Experience[] = [
  {
    period: "Nov. 2022 — PRESENTE",
    role: "Full Stack Developer",
    company: "UNIVERSAE",
    description:
      "Mantenimiento y mejora de la plataforma educativa, implementación de nuevas funcionalidades, integraciones con herramientas de terceros, desarrollo de pasarelas de pagos a medida, optimización del rendimiento y seguridad, soporte técnico y resolución de incidencias.",
    tags: [
      "WordPress",
      "NEXT.JS",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
      "PHP",
      "MySQL",
      "API REST",
      "Git",
    ],
  },
  {
    period: "Sept. 2021 — Sept. 2022",
    role: "Full Stack Developer",
    company: "Ankaa Studio",
    description:
      "Desarrollo de temas a medida con WordPress y programación de CRM con CodeIgniter.",
    tags: [
      "WordPress",
      "CodeIgniter",
      "PHP",
      "JavaScript",
      "jQuery",
      "LESS",
      "Git",
    ],
  },
  {
    period: "Jun. 2021 — Sept. 2021",
    role: "Back-end Developer",
    company: "Makedit",
    description: "Desarrollo web con Laravel.",
    tags: ["Laravel", "PHP", "JavaScript", "jQuery", "SCSS", "Git"],
  },
  {
    period: "Abril 2013 — Junio 2013",
    role: "Becario Adm. de sistemas",
    company: "Hefame",
    description:
      "Montaje servidor SUSE y de la nube para el intercambio de datos dentro de la empresa. Solventar incidencias de usuarios por VPN",
    tags: ["Adm. Sistemas", "Ubuntu", "Active Directory"],
  },
];

export const formationData: Formation[] = [
  {
    period: "Septiembre 2011 — Junio 2013",
    title: "Grado Superio en Administración de Sistemas Informáticos y Redes",
    institution: "I.E.S. José Luis Castillo Puche",
    description: [
      "Programación web con HTML, CSS, PHP Y Java.",
      "Administración y gestión de bases de datos relacionales mediante SQL.",
      "Configuración y administración de servicios de red: DNS, FTP, correo electrónico y routing",
      "Instalación, configuración y mantenimiento de servidores Windows y Linux.",
      "Administración de sistemas operativos, gestión de usuarios, permisos y políticas de seguridad.",
      "Gestión de redes, virtualización y resolución de incidencias técnicas.",
      "Automatización de tareas básicas y administración de infraestructuras informáticas.",
    ],
    icon: GraduationCap,
    active: true,
  },
];

export const projects: Project[] = [
  {
    title: "Apex Padel Shop",
    description:
      "Tienda online de pádel con autenticación, carrito, PayPal, panel admin, PostgreSQL y arquitectura hexagonal/DDD.",
    image: "/apex_padel.png",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Next-Auth",
      "PayPal",
      "Cloudinary",
      "Tailwind CSS",
      "Zustand",
      "Zod",
      "Docker",
      "Husky",
    ],
    demoUrl: "https://weather-react-tscript.netlify.app/",
  },
  {
    title: "Weather APP ",
    description:
      "Dashboard del clima con OpenWeatherMap, pronóstico 5 días, calidad del aire, radar simulado, geolocalización y temas visuales.",
    image: "/weather_app.png",
    tags: [
      "React 18",
      "TypeScript",
      "Vite 6",
      "SWC",
      "Zustand",
      "Axios",
      "Zod",
      "Tailwind CSS",
      "CSS Modules",
      "lucide-react",
      "ESLint",
    ],
    demoUrl: "https://weather-react-tscript.netlify.app/",
  },
  {
    title: "Guitar Shop",
    description:
      "Tienda online de guitarras con carrito CRUD, notificaciones toast, persistencia localStorage y diseño responsive.",
    image: "/guitar_shop.png",
    tags: [
      "React 18",
      "JavaScript",
      "Vite",
      "SWC",
      "Bootstrap 5",
      "react-toastify",
      "ESLint",
    ],
    demoUrl: "https://react-guitar.netlify.app/",
  },
  {
    title: "Calculadora de propinas",
    description:
      "POS para restaurante que calcula propinas, gestiona órdenes, menú interactivo con búsqueda y filtros, modo oscuro.",
    image: "/calculadora_de_propinas.png",
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ESLint",
      "SWC",
      "MaterialSymbols",
    ],
    demoUrl: "https://calculadora-propinas-tailwind-react.netlify.app/",
  },
  {
    title: "TODO list",
    description:
      "App de tareas con modo oscuro/claro, filtros por estado, persistencia localStorage y diseño responsive.",
    image: "/TODO_list.png",
    tags: [
      "React 18",
      "JavaScript",
      "Vite",
      "SWC",
      "styled-components",
      "ESLint",
      "uuidv4",
    ],
    demoUrl: "https://todo-task-app-io.netlify.app/",
  },
];
