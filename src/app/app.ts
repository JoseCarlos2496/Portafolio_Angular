import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from './core/i18n';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Experience, Projects, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly i18n = inject(LanguageService);
}
