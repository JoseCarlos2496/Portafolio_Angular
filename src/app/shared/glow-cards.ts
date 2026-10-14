import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/** Distancia (px) alrededor del contenedor en la que el resplandor sigue activo. */
const REACH = 240;

/**
 * Resplandor en los bordes de las tarjetas `.glow-card` que sigue al cursor
 * y se extiende a las tarjetas vecinas (estilos en styles.scss).
 *
 * Basado en "Pricing cards hover effect" de Ines (@inescodes):
 * https://codepen.io/inescodes/pen/PoxMyvX — licencia MIT.
 * En lugar de duplicar las tarjetas en una capa superpuesta, cada tarjeta
 * pinta su borde en un ::before enmascarado en la posición del cursor.
 */
@Directive({
  selector: '[appGlowCards]',
  host: { class: 'glow-cards' },
})
export class GlowCards {
  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      let frame = 0;
      let pointer: { x: number; y: number } | null = null;

      const update = () => {
        frame = 0;
        if (!pointer) return;
        const box = host.getBoundingClientRect();
        const near =
          pointer.x > box.left - REACH &&
          pointer.x < box.right + REACH &&
          pointer.y > box.top - REACH &&
          pointer.y < box.bottom + REACH;
        host.style.setProperty('--glow-opacity', near ? '1' : '0');
        if (!near) return;

        for (const card of host.querySelectorAll<HTMLElement>('.glow-card')) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--glow-x', `${pointer.x - rect.left}px`);
          card.style.setProperty('--glow-y', `${pointer.y - rect.top}px`);
        }
      };
      const schedule = () => (frame ||= requestAnimationFrame(update));

      const onMove = (e: PointerEvent) => {
        pointer = { x: e.clientX, y: e.clientY };
        schedule();
      };
      const onLeave = () => {
        pointer = null;
        host.style.setProperty('--glow-opacity', '0');
      };

      document.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('scroll', schedule, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
      destroyRef.onDestroy(() => {
        cancelAnimationFrame(frame);
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('scroll', schedule);
        document.documentElement.removeEventListener('pointerleave', onLeave);
      });
    });
  }
}
