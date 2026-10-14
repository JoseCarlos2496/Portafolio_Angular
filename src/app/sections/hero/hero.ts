import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n';
import { Icon } from '../../shared/icon';
import { LocalTime } from '../../shared/local-time';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-hero',
  imports: [Icon, LocalTime, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
}
