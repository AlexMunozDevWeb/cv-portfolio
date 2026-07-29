import {
  GraduationCap,
  Home,
  BriefcaseBusiness,
  Briefcase,
  Mail,
} from "lucide-react";
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
  { id: 5, label: "Proyectos", href: "#projects" },
];

export const hero = {
  title: "PORTFOLIO",
  name: "Alex Muñoz",
  job: "WordPress & Next.js Developer",
  buttonProjects: "VER PROYECTOS",
  buttonContact: "CONTACTO",
  availability: "// DISPONIBLE PARA NUEVOS PROYECTOS",
};

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

export const sectionLabels = {
  experience: {
    title: "Experiencia",
    subtitle: "EXPERIENCIA PROFESIONAL",
  },
  formation: {
    title: "Formación",
    subtitle: "Formación académica",
  },
  projects: {
    title: "Proyectos destacados",
    subtitle: "Desarrollo de aplicaciones y soluciones",
    archiveLink: "Ver proyectos en GitHub",
    archiveUrl: "https://github.com/AlexMunozDevWeb/",
  },
};

export const headerLabels = {
  contactButton: "Contacto",
  nav: [
    { id: "hero", label: "Inicio", icon: Home },
    { id: "experience", label: "Experiencia", icon: BriefcaseBusiness },
    { id: "formation", label: "Formación", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ],
};

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
  // {
  //   title: "Apex Padel Shop",
  //   description:
  //     "Tienda online de pádel con autenticación, carrito, PayPal, panel admin, PostgreSQL y arquitectura hexagonal/DDD.",
  //   image: "/apex_padel.png",
  //   tags: [
  //     "Next.js 16",
  //     "React 19",
  //     "TypeScript",
  //     "PostgreSQL",
  //     "Prisma",
  //     "Next-Auth",
  //     "PayPal",
  //     "Cloudinary",
  //     "Tailwind CSS",
  //     "Zustand",
  //     "Zod",
  //     "Docker",
  //     "Husky",
  //   ],
  //   demoUrl: "https://weather-react-tscript.netlify.app/",
  // },
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

export const contact = {
  title: "Contacto",
  description:
    "Si tienes una idea, una oportunidad de colaboración o simplemente quieres ponerte en contacto, estaré encantado de leerte. Envíame un mensaje y te responderé lo antes posible.",
  email: "designer.style.alex@gmail.com",
};

export const footerData = {
  copyright: "Copyright © 2026 Alex Muñoz",
  links: [
    {
      id: 1,
      label: "GitHub",
      href: "https://github.com/AlexMunozDevWeb/",
      icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
    },
    {
      id: 2,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alex-full-stack/",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
  ],
  version: "v1.0.0",
};
