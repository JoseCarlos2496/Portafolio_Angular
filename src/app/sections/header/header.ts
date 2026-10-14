import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '../../core/i18n';
import { ThemeService } from '../../core/theme';
import { Icon } from '../../shared/icon';

const SECTION_IDS = ['experiencia', 'proyectos', 'sobre-mi', 'contacto'] as const;

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly i18n = inject(LanguageService);
  protected readonly links = computed(() => {
    const nav = this.i18n.t().nav;
    const labels = [nav.experience, nav.projects, nav.about, nav.contact];
    return SECTION_IDS.map((id, i) => ({ id, label: labels[i] }));
  });
  protected readonly active = signal('');
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Resalta en el menú la sección visible.
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 16);
    if (window.scrollY < 200) this.active.set('');
  }
}
