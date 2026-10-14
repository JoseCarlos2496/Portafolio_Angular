import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n';
import { GlowCards } from '../../shared/glow-cards';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-projects',
  imports: [GlowCards, Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly i18n = inject(LanguageService);
}
