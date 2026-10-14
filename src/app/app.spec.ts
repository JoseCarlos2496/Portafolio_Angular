import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { LanguageService } from './core/i18n';
import { PROFILES } from './data/profile';
import { UI } from './data/ui';

describe('App', () => {
  beforeEach(async () => {
    // jsdom no implementa IntersectionObserver ni matchMedia.
    globalThis.IntersectionObserver ??= class {
      observe() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver;
    globalThis.matchMedia ??= (() => ({ matches: false })) as unknown as typeof matchMedia;

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the profile name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(PROFILES.es.name);
  });

  it('should render every section', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    for (const id of ['inicio', 'experiencia', 'proyectos', 'sobre-mi', 'contacto']) {
      expect(compiled.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  it('should show the local time', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const time = (fixture.nativeElement as HTMLElement).querySelector('app-local-time time');
    expect(time?.textContent).toMatch(/\d{1,2}:\d{2}/);
  });

  it('should switch language', async () => {
    const fixture = TestBed.createComponent(App);
    const i18n = TestBed.inject(LanguageService);
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = () => compiled.querySelector('#experiencia h2')?.textContent?.trim();

    i18n.lang.set('es');
    await fixture.whenStable();
    expect(heading()).toBe(UI.es.nav.experience);
    expect(document.documentElement.lang).toBe('es');

    i18n.toggle();
    await fixture.whenStable();
    expect(heading()).toBe(UI.en.nav.experience);
    expect(compiled.querySelector('.role')?.textContent).toContain(PROFILES.en.role);
    expect(document.documentElement.lang).toBe('en');
  });
});
