import { GraduationCap } from "lucide-react";
import type { MenuItem, bioParagraph, Experience, Formation } from "../types/";

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
