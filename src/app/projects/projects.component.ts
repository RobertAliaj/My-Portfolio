import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  projects = [
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        'Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
      ],
      image: 'Join.webp',
      links: [
        'https://join.robert-aliaj.de/login.html',
        'https://github.com/AlinaWetter/join',
      ],
    },
    {
      title: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens.',
        'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe Peligroso, seinen Kampf auf Leben und Tod gegen die Hühner zu gewinnen.'
      ],
      image: 'pollo-loco.webp',
      links: [
        'https://el-pollo-loco.robert-aliaj.de/',
        'https://github.com/RobertAliaj/El-Pollo-Loco',
      ],
    },
    {
      title: 'Simple CRM',
      skills: ['Angular', 'Firebase', 'Material Design', 'API'],
      description: [
        'A simple Customer Relationship Management system working with CRUD functionality.',
        'Ein einfaches Kundenbeziehungsmanagement-System, das mit CRUD-Funktionalität arbeitet.'
      ],
      image: 'crm.webp',
      links: [
        'http://crm.robert-aliaj.de/',
        'https://github.com/RobertAliaj/Simple-CRM',
      ],
    },
  ];

  event: string = 'en';

  constructor(public translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.event = event.lang;
    });
  }

}


