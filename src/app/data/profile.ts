import type { Lang } from '../core/i18n';
import { IconName } from '../shared/icon';

export interface Social {
  label: string;
  url: string;
  icon: IconName;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  /** Imagen en /public (ej: 'projects/mi-app.png'). Si no hay, se muestra un degradado. */
  image?: string;
  repo?: string;
  demo?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  initials: string;
  /** Logo en /public (header y sello sobre la foto). */
  logo: string;
  role: string;
  location: string;
  /** Zona horaria IANA para el reloj (ej: 'America/Guayaquil'). */
  timeZone: string;
  available: boolean;
  /** Foto en /public (ej: 'avatar.jpg'). Si se deja vacío, se muestran las iniciales. */
  avatar: string;
  /** CV en /public (ej: 'cv-es.pdf'). Si se deja vacío, el botón no aparece. */
  cv: string;
  email: string;
  headline: string;
  summary: string;
  about: string[];
  socials: Social[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education;
  languages: Language[];
  courses: string[];
}

// ───────── Datos comunes a ambos idiomas ─────────

const shared = {
  name: 'Jose Carlos Araujo',
  initials: 'JA',
  logo: 'img/logo.webp',
  location: 'Quito, Ecuador',
  timeZone: 'America/Guayaquil',
  available: false,
  avatar: 'img/avatar.webp',
  email: 'josec.araujom@gmail.com',
  // Agrega aquí tu GitHub y LinkedIn, por ejemplo:
  // { label: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
  // { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: 'linkedin' },
  socials: [{ label: 'Email', url: 'mailto:josec.araujom@gmail.com', icon: 'mail' }] as Social[],
  courses: [
    'Udemy — JavaScript and React for Beginners: Create 12 projects',
    'Udemy — React Native Expo: Creando un TripAdvisor de Restaurantes',
    'Udemy — Aprende ASP.NET Core MVC 6 Haciendo Proyectos Desde Cero',
    'Udemy — React: De cero a experto (Hooks y MERN)',
    'Crehana — Introducción al desarrollo backend con Express',
    'Crehana — Fundamentos de React',
    'Crehana — Fundamentos de Node.js',
    'Crehana — TypeScript desde cero',
    'Crehana — Seguridad de la información',
  ],
};

const tech = {
  publipromueve: ['.NET 8', '.NET 9', 'C#', 'Jira'],
  freelance: ['UI/UX', 'Web', 'CMS'],
  banco: ['C#', 'ASP.NET', '.NET Core', 'MVC 5', 'SQL Server', 'REST', 'SOAP'],
  goforcustomer: ['ASP.NET Core', 'Entity Framework', 'Dapper', 'SQL Server', 'Azure DevOps', 'Genesys Cloud'],
  clearminds: ['Java', 'JavaScript', 'MySQL', 'Liquibase', 'AWS', 'Jenkins'],
  sherwin: ['Soporte', 'Windows'],
  ute: ['Java', 'JSF'],
};

const skillItems = {
  backend: ['C#', '.NET Core / .NET 9', '.NET Framework', 'ASP.NET MVC', 'Entity Framework', 'Dapper', 'Java', 'NestJS', 'REST', 'SOAP'],
  frontend: ['Angular', 'React', 'TypeScript', 'JavaScript', 'CMS'],
  data: ['SQL Server', 'PostgreSQL', 'MySQL', 'Liquibase'],
  tools: ['Azure', 'AWS', 'Jenkins', 'Jira', 'Genesys Cloud', 'Office'],
};

/**
 * ✏️ Edita estos objetos con tu información.
 * Todo el contenido de la página se genera a partir de aquí, en español (es) e inglés (en).
 */
export const PROFILES: Record<Lang, Profile> = {
  es: {
    ...shared,
    role: 'Desarrollador de Software',
    /** PDF en public/cv/. */
    cv: 'cv/CV-Jose-Araujo-ES.pdf',
    headline:
      'Construyo y mantengo aplicaciones críticas para banca y empresas, desde el backend en .NET hasta la interfaz web.',
    summary:
      'Ingeniero en Informática y Ciencias de la Computación con más de 5 años de experiencia en desarrollo de software, migración de sistemas legacy e integración de servicios.',
    about: [
      'Soy Ingeniero en Informática y Ciencias de la Computación por la Universidad UTE. Mi carrera se ha centrado en el sector financiero: participé en el desarrollo desde cero y la puesta en producción de un core bancario, y durante más de tres años mantuve y mejoré el sistema de Banco Solidario.',
      'Trabajo principalmente con C# y .NET en el backend, SQL Server para datos y Angular o React en el frontend. Me gusta migrar sistemas legacy a tecnologías modernas, integrar servicios con proveedores externos y encontrar la causa real de los errores en producción.',
      'En paralelo, desde 2017 diseño y desarrollo sitios web a medida para empresas y organizaciones como freelance.',
    ],
    experience: [
      {
        company: 'Publipromueve S.A.',
        role: 'Especialista de Desarrollo',
        period: 'Jul. 2026 — Actualidad',
        highlights: [
          'Gestión y optimización de aplicaciones críticas del core del negocio, con migraciones progresivas entre .NET Core 8 y .NET 9.',
          'Resolución de incidentes y requerimientos asignados en Jira, cumpliendo los SLAs y asegurando la continuidad operativa.',
          'Identificación y corrección de bugs en producción y pruebas, aplicando buenas prácticas de refactorización.',
          'Diagnóstico de fallas en servicios backend, optimización de consultas y análisis de logs para minimizar el downtime.',
        ],
        tech: tech.publipromueve,
      },
      {
        company: 'Freelance',
        role: 'Desarrollador Web',
        period: 'Abr. 2017 — Actualidad',
        highlights: [
          'Diseño, desarrollo y mantenimiento de sitios web a medida para diversas industrias, mejorando la presencia digital y la experiencia de usuario de cada cliente.',
        ],
        tech: tech.freelance,
      },
      {
        company: 'Banco Solidario S.A.',
        role: 'Ingeniero de Desarrollo',
        period: 'Dic. 2022 — Jun. 2026',
        highlights: [
          'Migración de sistemas legacy a nuevas tecnologías.',
          'Integración de servicios con proveedores externos.',
          'Mantenimiento y mejoras continuas del sistema bancario.',
          'Creación y mantenimiento de procedimientos almacenados y procesos por lotes en SQL Server.',
          'Desarrollo backend y frontend con C# ASP.NET Framework, .NET Core y MVC 5; creación de servicios REST y mantenimiento de servicios SOAP.',
        ],
        tech: tech.banco,
      },
      {
        company: 'GoForCustomer S.A.',
        role: 'Desarrollador Junior',
        period: 'Feb. 2022 — Dic. 2022',
        highlights: [
          'Creación de CRMs con ASP.NET Core, Entity Framework y Dapper en el backend.',
          'Creación y mantenimiento de bases de datos SQL Server y servicios REST en C#.',
          'DevOps con Azure y mantenimiento de sistemas en .NET Framework.',
          'Integración de desarrollos con Genesys Cloud.',
        ],
        tech: tech.goforcustomer,
      },
      {
        company: 'Clearminds Consultores',
        role: 'Desarrollador Junior',
        period: 'Abr. 2021 — Feb. 2022',
        highlights: [
          'Desarrollo de un core bancario desde cero y participación en su puesta en producción.',
          'Desarrollo frontend y backend en Java y JavaScript; procedimientos almacenados en MySQL.',
          'Versionado de base de datos con Liquibase, monitoreo de APIs en AWS y despliegues con Jenkins y Azure.',
        ],
        tech: tech.clearminds,
      },
      {
        company: 'Sherwin Williams',
        role: 'Asistente de TI',
        period: 'Sep. 2019 — Mar. 2020',
        highlights: ['Soporte técnico, control de inventario y actualización de sistemas operativos.'],
        tech: tech.sherwin,
      },
      {
        company: 'Universidad UTE',
        role: 'Desarrollador',
        period: 'Abr. 2019 — Sep. 2019',
        highlights: [
          'Desarrollo de un sistema de reservas e inventario para el Laboratorio de Alimentos de la universidad en Java y JSF.',
        ],
        tech: tech.ute,
      },
    ],
    projects: [
      {
        title: 'Mediación Comunitaria',
        description:
          'Diseño UI/UX e implementación integral de la plataforma web del proyecto de mediación comunitaria PRD (ARES / CCD), 2017 — 2023.',
        tech: ['UI/UX', 'Web'],
        demo: 'https://mediacioncomunitaria.org',
      },
      {
        title: 'Constructora Proyevit',
        description:
          'Sitio web corporativo y mantenimiento técnico continuo para garantizar su rendimiento y la actualización de contenidos.',
        tech: ['Web', 'Mantenimiento'],
        demo: 'https://proyevit.com',
      },
      {
        title: 'Midecar S.A.',
        description:
          'Sitio web empresarial para una compañía de almacenamiento temporal aduanero, con su oferta de servicios logísticos y de comercio exterior.',
        tech: ['Web', 'UI/UX'],
        demo: 'https://midecar.ec',
      },
      {
        title: 'Flyer Shop',
        description: 'Tienda en línea de flyers desarrollada como proyecto personal.',
        tech: ['React'],
      },
      {
        title: 'Rutas de buses urbanos',
        description: 'Aplicación para registrar las rutas de buses urbanos.',
        tech: ['React'],
      },
    ],
    skills: [
      { title: 'Backend', items: skillItems.backend },
      { title: 'Frontend', items: skillItems.frontend },
      { title: 'Bases de datos', items: skillItems.data },
      { title: 'Cloud y herramientas', items: skillItems.tools },
    ],
    education: {
      degree: 'Ingeniero en Informática y Ciencias de la Computación',
      school: 'Universidad UTE — Ecuador',
      period: '2014 — 2019',
    },
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio (B1)' },
    ],
  },

  en: {
    ...shared,
    role: 'Software Developer',
    /** PDF in public/cv/. */
    cv: 'cv/CV-Jose-Araujo-EN.pdf',
    headline:
      'I build and maintain business-critical applications for banking and enterprises, from the .NET backend to the web interface.',
    summary:
      'Computer Science and Informatics Engineer with 5+ years of experience in software development, legacy system migration and service integration.',
    about: [
      "I'm a Computer Science and Informatics Engineer from Universidad UTE. My career has focused on the financial sector: I helped build a core banking system from scratch and take it to production, and for over three years I maintained and improved Banco Solidario's banking system.",
      'I mainly work with C# and .NET on the backend, SQL Server for data, and Angular or React on the frontend. I enjoy migrating legacy systems to modern technologies, integrating services with external providers and tracking down the root cause of production issues.',
      'Alongside that, since 2017 I have been designing and building custom websites for companies and organizations as a freelancer.',
    ],
    experience: [
      {
        company: 'Publipromueve S.A.',
        role: 'Development Specialist',
        period: 'Jul. 2026 — Present',
        highlights: [
          'Management and optimization of business-critical core applications, performing incremental migrations between .NET Core 8 and .NET 9.',
          'Proactive resolution of incidents and requirements assigned through Jira, meeting SLAs and ensuring operational continuity.',
          'Identifying and fixing bugs in production and test environments, applying refactoring best practices.',
          'Diagnosing backend service failures, optimizing queries and analyzing logs to minimize downtime.',
        ],
        tech: tech.publipromueve,
      },
      {
        company: 'Freelance',
        role: 'Web Developer',
        period: 'Apr. 2017 — Present',
        highlights: [
          "Design, development and maintenance of custom websites for different industries, improving each client's digital presence and user experience.",
        ],
        tech: tech.freelance,
      },
      {
        company: 'Banco Solidario S.A.',
        role: 'Software Development Engineer',
        period: 'Dec. 2022 — Jun. 2026',
        highlights: [
          'Migration of legacy systems to new technologies.',
          'Integration of services with external providers.',
          'Maintenance and continuous improvement of the banking system.',
          'Creation and maintenance of stored procedures and batch services in SQL Server.',
          'Backend and frontend development with C# ASP.NET Framework, .NET Core and MVC 5; building REST services and maintaining SOAP services.',
        ],
        tech: tech.banco,
      },
      {
        company: 'GoForCustomer S.A.',
        role: 'Junior Developer',
        period: 'Feb. 2022 — Dec. 2022',
        highlights: [
          'Building CRMs with ASP.NET Core, Entity Framework and Dapper on the backend.',
          'Creation and maintenance of SQL Server databases and REST services in C#.',
          'DevOps with Azure and maintenance of .NET Framework systems.',
          'Integration with Genesys Cloud.',
        ],
        tech: tech.goforcustomer,
      },
      {
        company: 'Clearminds Consultores',
        role: 'Junior Developer',
        period: 'Apr. 2021 — Feb. 2022',
        highlights: [
          'Built a core banking system from scratch and took part in its production launch.',
          'Frontend and backend development in Java and JavaScript; stored procedures in MySQL.',
          'Database versioning with Liquibase, API monitoring on AWS and deployments with Jenkins and Azure.',
        ],
        tech: tech.clearminds,
      },
      {
        company: 'Sherwin Williams',
        role: 'IT Assistant',
        period: 'Sep. 2019 — Mar. 2020',
        highlights: ['Technical support, inventory control and operating system updates.'],
        tech: ['Support', 'Windows'],
      },
      {
        company: 'Universidad UTE',
        role: 'Developer',
        period: 'Apr. 2019 — Sep. 2019',
        highlights: [
          "Built a booking and inventory system for the university's Food Laboratory using Java and JSF.",
        ],
        tech: tech.ute,
      },
    ],
    projects: [
      {
        title: 'Community Mediation',
        description:
          'UI/UX design and full implementation of the web platform for the PRD (ARES / CCD) community mediation project, 2017 — 2023.',
        tech: ['UI/UX', 'Web'],
        demo: 'https://mediacioncomunitaria.org',
      },
      {
        title: 'Constructora Proyevit',
        description:
          'Corporate website and ongoing technical maintenance to keep it fast and its content up to date.',
        tech: ['Web', 'Maintenance'],
        demo: 'https://proyevit.com',
      },
      {
        title: 'Midecar S.A.',
        description:
          'Business website for a temporary customs warehousing company, presenting its logistics and foreign trade services.',
        tech: ['Web', 'UI/UX'],
        demo: 'https://midecar.ec',
      },
      {
        title: 'Flyer Shop',
        description: 'Online flyer store built as a personal project.',
        tech: ['React'],
      },
      {
        title: 'Urban Bus Routes',
        description: 'Application for registering urban bus routes.',
        tech: ['React'],
      },
    ],
    skills: [
      { title: 'Backend', items: skillItems.backend },
      { title: 'Frontend', items: skillItems.frontend },
      { title: 'Databases', items: skillItems.data },
      { title: 'Cloud & tools', items: skillItems.tools },
    ],
    education: {
      degree: 'Computer Science and Informatics Engineer',
      school: 'Universidad UTE — Ecuador',
      period: '2014 — 2019',
    },
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Intermediate (B1)' },
    ],
  },
};
