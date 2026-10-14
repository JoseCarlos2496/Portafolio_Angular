import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/i18n';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly i18n = inject(LanguageService);
  protected readonly year = new Date().getFullYear();
  protected readonly copied = signal(false);

  protected async copyEmail(): Promise<void> {
    const email = this.i18n.profile().email;
    try {
      await navigator.clipboard.writeText(email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      location.href = `mailto:${email}`;
    }
  }
}
