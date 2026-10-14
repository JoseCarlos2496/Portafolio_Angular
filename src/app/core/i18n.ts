import { Injectable, computed, effect, signal } from '@angular/core';
import { PROFILES } from '../data/profile';
import { UI } from '../data/ui';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.initialLang());
  /** Contenido del perfil en el idioma actual. */
  readonly profile = computed(() => PROFILES[this.lang()]);
  /** Textos fijos de la interfaz en el idioma actual. */
  readonly t = computed(() => UI[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang;
      document.title = this.t().pageTitle;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Almacenamiento no disponible (modo privado): el idioma no se recuerda.
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') return saved;
    } catch {}
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  }
}
