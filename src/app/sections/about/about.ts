import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n';
import { GlowCards } from '../../shared/glow-cards';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  imports: [GlowCards, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly i18n = inject(LanguageService);
}
