import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n';
import { GlowCards } from '../../shared/glow-cards';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-experience',
  imports: [GlowCards, Icon, Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly i18n = inject(LanguageService);
}
