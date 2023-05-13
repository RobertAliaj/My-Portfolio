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
      image: 'pollo-loco.png',
      links: [
        'http://el-pollo-loco.robert-aliaj.de/',
        'https://github.com/RobertAliaj/El-Pollo-Loco',
      ],
    },
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
      ],
      image: 'Join.png',
      links: [
        'https://join.robert-aliaj.de/login.html',
        'https://github.com/AlinaWetter/join',
      ],
    },
    {
      title: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'API'],
      description: [
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        'Basierend auf der PokéAPI, eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.'
      ],
      image: 'pokedex.png',
      links: [
        'http://pokedex.robert-aliaj.de/',
        'https://github.com/RobertAliaj/Pokedex',
      ],
    },
  ];

  event = 'en';

  constructor(public translate: TranslateService){
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.event = event.lang;
      console.log(this.event);
      
    });
  }

}


