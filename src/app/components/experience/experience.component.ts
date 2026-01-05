import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'B4B.tech',
      role: 'Desenvolvedor Full-Stack',
      period: 'Ago 2025 - Presente',
      description: [
        ' Desenvolvimento e manutenção de sistemas web utilizando .NET (C#) e Angular.',
        ' DDD, NHibernate e LINQ para implementação de regras de negócio.',
        ' Consultas e integrações com banco de dados Oracle PL/SQL.',
        ' Angular, desenvolvendo componentes, eventos e integrações com a API.',
        ' Arquitetura de software, código limpo e boas práticas de desenvolvimento.'
      ]
    },
    {
      company: 'Grupo Autoglass',
      role: 'Desenvolvedor AutoPlay',
      period: 'Fev 2025 - Ago 2025',
      description: [
        ' Aprendizado e atuação no desenvolvimento de sistemas web corporativos.',
        ' Desenvolvimento com .NET (C#), Angular e Oracle PL/SQL.',
        ' Aplicação de padrões DDD, NHibernate e LINQ.',
        ' Participação em projetos de manutenção e evolução de sistemas.'
      ]
    }
  ];
}
