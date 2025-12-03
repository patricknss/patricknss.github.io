import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    ThemeToggleComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'Patrick | Software Engineer';
  private observer: IntersectionObserver | null = null;
  private isScrolling = false;
  currentSectionIndex = 0;
  private sections: HTMLElement[] = [];
  private scrollCooldown = 800;

  sectionIds = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
    this.sections = Array.from(document.querySelectorAll('section'));
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (this.isScrolling) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    const currentSection = this.sections[this.currentSectionIndex];
    const container = currentSection?.querySelector('.container') as HTMLElement;

    if (container && container.scrollHeight > container.clientHeight) {
      const isAtTop = container.scrollTop <= 0;
      const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;

      if ((direction === -1 && isAtTop) || (direction === 1 && isAtBottom)) {
        event.preventDefault();
        const nextIndex = this.currentSectionIndex + direction;
        if (nextIndex >= 0 && nextIndex < this.sections.length) {
          this.scrollToSection(nextIndex);
        }
      }
      return;
    }

    event.preventDefault();
    const nextIndex = this.currentSectionIndex + direction;
    if (nextIndex >= 0 && nextIndex < this.sections.length) {
      this.scrollToSection(nextIndex);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.isScrolling) return;

    let direction = 0;
    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      direction = 1;
    } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      direction = -1;
    }

    if (direction !== 0) {
      event.preventDefault();
      const nextIndex = this.currentSectionIndex + direction;
      if (nextIndex >= 0 && nextIndex < this.sections.length) {
        this.scrollToSection(nextIndex);
      }
    }
  }

  goToSection(index: number): void {
    if (!this.isScrolling && index >= 0 && index < this.sections.length) {
      this.scrollToSection(index);
    }
  }

  private scrollToSection(index: number): void {
    this.isScrolling = true;
    this.currentSectionIndex = index;
    
    this.sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    const container = this.sections[index]?.querySelector('.container') as HTMLElement;
    if (container) {
      container.scrollTop = 0;
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, this.scrollCooldown);
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const index = this.sections.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            this.currentSectionIndex = index;
          }
        }
      });
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      this.observer?.observe(section);
    });
  }
}