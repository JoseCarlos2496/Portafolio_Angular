import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, signal } from '@angular/core';
import { LanguageService } from '../core/i18n';

/** Reloj en vivo con la hora de una zona horaria (ej: 'America/Guayaquil'). */
@Component({
  selector: 'app-local-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<time [attr.datetime]="now().toISOString()" [title]="fullDate()">{{ time() }}</time>`,
  styles: `
    time {
      font-variant-numeric: tabular-nums;
    }
  `,
})
export class LocalTime {
  readonly timeZone = input.required<string>();

  private readonly i18n = inject(LanguageService);
  protected readonly now = signal(new Date());

  protected readonly time = computed(() =>
    new Intl.DateTimeFormat(this.locale(), {
      timeZone: this.timeZone(),
      hour: 'numeric',
      minute: '2-digit',
      hour12: this.i18n.lang() === 'en',
    }).format(this.now()),
  );

  protected readonly fullDate = computed(() =>
    new Intl.DateTimeFormat(this.locale(), {
      timeZone: this.timeZone(),
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(this.now()),
  );

  private readonly locale = computed(() => (this.i18n.lang() === 'es' ? 'es-EC' : 'en-US'));

  constructor() {
    const id = setInterval(() => this.now.set(new Date()), 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }
}
