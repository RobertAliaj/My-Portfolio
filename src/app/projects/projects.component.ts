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
      title: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens',
        'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe Peligroso, seinen Kampf auf Leben und Tod gegen die Hühner zu gewinnen.'
      ],
      image: 'pollo-loco.webp',
      links: [
        'https://el-pollo-loco.robert-aliaj.de/',
        'https://github.com/RobertAliaj/El-Pollo-Loco',
      ],
    },
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        'Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
      ],
      image: 'Join.webp',
      links: [
        'https://gruppe-join-421.developerakademie.net/login.html',
        'https://github.com/AlinaWetter/join',
      ],
    },
    {
      title: 'Simple CRM',
      skills: ['Angular', 'Firebase', 'Material Design', 'API'],
      description: [
        'A simple Customer Relationship Management system working with CRUD functionality',
        'Ein einfaches Kundenbeziehungsmanagement-System, das mit CRUD-Funktionalität arbeitet.'
      ],
      image: 'crm.webp',
      links: [
        'http://crm.robert-aliaj.de/',
        'https://github.com/RobertAliaj/Simple-CRM',
      ],
    },
    {
      title: 'Ring of Fire',
      skills: ['Angular', 'Firebase', 'Material Design'],
      description: [
        'Ring Of Fire is an interactive drinking game app built using Angular, Firebase, and Material Design. It provides a fun way to play with friends and family while enjoying a few drinks at the same time.',
        'Ring Of Fire ist eine interaktive Trinkspiel-App, die mit Angular, Firebase und Material Design entwickelt wurde. Sie bietet eine lustige Möglichkeit, mit Freunden und Familie zu spielen, während man gleichzeitig ein paar Getränke genießt.'
      ],
      image: 'ring-of-fire.webp',
      links: [
        'https://ring-of-fire.robert-aliaj.de/',
        'https://github.com/RobertAliaj/Ring-Of-Fire',
      ],
    }
  ];

  event: string = 'en';

  constructor(public translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.event = event.lang;
    });
  }

}


