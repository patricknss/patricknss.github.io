import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-switch-container">
      <button 
        (click)="prevTheme()"
        class="theme-arrow"
        aria-label="Tema anterior">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <div class="theme-display" (click)="toggleTheme()">
        <span class="theme-icon" [innerHTML]="themeService.getThemeIcon()"></span>
        <span class="theme-label">{{ themeService.getThemeLabel() }}</span>
      </div>
      
      <button 
        (click)="nextTheme()"
        class="theme-arrow"
        aria-label="Próximo tema">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  `,
  styles: [`
    .theme-switch-container {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 100;
      display: flex;
      align-items: center;
      gap: 0;
      background: var(--accent);
      border: 2px solid var(--accent);
      border-radius: 9999px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    .theme-switch-container:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
    }

    .theme-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: transparent;
      border: none;
      color: var(--bg-primary);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .theme-arrow:hover {
      background: rgba(0, 0, 0, 0.15);
    }

    .theme-display {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      background: var(--bg-primary);
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 100px;
      justify-content: center;
      text-align: center;
    }

    .theme-display:hover {
      background: var(--bg-secondary);
    }

    .theme-icon {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    .theme-label {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    @media (max-width: 768px) {
      .theme-switch-container {
        bottom: 1.5rem;
        right: 1.5rem;
      }

      .theme-arrow {
        padding: 0.625rem;
      }

      .theme-display {
        padding: 0.625rem 0.75rem;
        min-width: 80px;
      }

      .theme-label {
        font-size: 0.6rem;
      }
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  nextTheme(): void {
    this.themeService.toggleTheme();
  }

  prevTheme(): void {
    this.themeService.toggleTheme();
    this.themeService.toggleTheme();
  }
}
