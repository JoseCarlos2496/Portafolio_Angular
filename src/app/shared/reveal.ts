import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

/** Añade la clase `is-visible` cuando el elemento entra en pantalla (animación en styles.scss). */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal', '[style.--reveal-delay.ms]': 'appReveal()' },
})
export class Reveal {
  /** Retraso de la animación en ms. */
  readonly appReveal = input(0, { transform: (v: unknown) => numberAttribute(v, 0) });

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
