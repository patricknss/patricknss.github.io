import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Biblioteca Gerador de Hashes',
      description: 'Biblioteca C# extensível para geração de hashes criptográficos (MD5, SHA1, SHA256, SHA384, SHA512) com arquitetura limpa, além de um utilitário de linha de comando para calcular hashes de forma simples.',
      technologies: ['C#', '.NET', 'Criptografia', 'Clean Architecture', 'CLI'],
      featured: true,
      githubUrl: 'https://github.com/patricknss/biblioteca-gerador-de-hashes'
    },
    {
      title: 'Biblioteca Validação Documentos BR',
      description: 'Pequena biblioteca focada em algoritmos e clean code para validar documentos nacionais (CPF, CNPJ, PIS e RENAVAM). Ideal para uso em APIs, serviços de domínio ou pipelines ETL.',
      technologies: ['C#', '.NET', 'Validação', 'Clean Code', 'Algoritmos'],
      featured: true,
      githubUrl: 'https://github.com/patricknss/biblioteca-validacao-documentos-br'
    }
  ];
}