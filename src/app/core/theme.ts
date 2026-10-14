import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.initialTheme());

  constructor() {
    effect(() => {
      const theme = this.theme();
      document.documentElement.dataset['theme'] = theme;
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // Almacenamiento no disponible (modo privado): el tema no se recuerda.
      }
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private initialTheme(): Theme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
