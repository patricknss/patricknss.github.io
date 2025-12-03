import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  skills = [
    { name: 'C#' },
    { name: '.NET' },
    { name: 'Angular' },
    { name: 'TypeScript' },
    { name: 'Oracle PL/SQL' },
    { name: 'NHibernate' },
    { name: 'LINQ' },
    { name: 'DDD' },
    { name: 'Git' },
    { name: 'REST APIs' }
  ];
}
