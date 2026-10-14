import type { Lang } from '../core/i18n';

/** Textos fijos de la interfaz (menú, botones, títulos). */
const es = {
  pageTitle: 'Jose Carlos Araujo — Desarrollador de Software',
  skip: 'Saltar al contenido',
  nav: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  home: 'Ir al inicio',
  mainNav: 'Principal',
  themeToLight: 'Cambiar a tema claro',
  themeToDark: 'Cambiar a tema oscuro',
  switchLang: 'Switch to English',
  openMenu: 'Abrir menú',
  hero: {
    available: 'Disponible para nuevos proyectos',
    greeting: 'Hola, soy',
    contact: 'Contáctame',
    cv: 'Descargar CV',
    photoAlt: 'Foto de',
    localTime: 'hora local',
  },
  projects: {
    code: 'Código',
    visit: 'Ver sitio',
    screenshotAlt: 'Captura de',
  },
  about: {
    skills: 'Habilidades',
    education: 'Formación',
    languages: 'Idiomas',
    courses: 'Cursos',
  },
  contact: {
    title: '¿Tienes un proyecto en mente?',
    highlight: 'Hablemos.',
    text: 'Estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme y te respondo lo antes posible.',
    copy: 'Copiar correo',
    copied: '¡Copiado!',
    madeWith: 'Hecho con Angular.',
  },
};

export type UiStrings = typeof es;

const en: UiStrings = {
  pageTitle: 'Jose Carlos Araujo — Software Developer',
  skip: 'Skip to content',
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  home: 'Go to top',
  mainNav: 'Main',
  themeToLight: 'Switch to light theme',
  themeToDark: 'Switch to dark theme',
  switchLang: 'Cambiar a español',
  openMenu: 'Open menu',
  hero: {
    available: 'Available for new projects',
    greeting: "Hi, I'm",
    contact: 'Contact me',
    cv: 'Download CV',
    photoAlt: 'Photo of',
    localTime: 'local time',
  },
  projects: {
    code: 'Code',
    visit: 'Visit site',
    screenshotAlt: 'Screenshot of',
  },
  about: {
    skills: 'Skills',
    education: 'Education',
    languages: 'Languages',
    courses: 'Courses',
  },
  contact: {
    title: 'Have a project in mind?',
    highlight: "Let's talk.",
    text: "I'm open to new opportunities and collaborations. Drop me a line and I'll get back to you as soon as possible.",
    copy: 'Copy email',
    copied: 'Copied!',
    madeWith: 'Built with Angular.',
  },
};

export const UI: Record<Lang, UiStrings> = { es, en };
