import { Component } from '@angular/core';

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
      ],
      image: 'Pollo loco 1.png',
      links: [
        'http://el-pollo-loco.robert-aliaj.de/',
        'https://github.com/RobertAliaj/El-Pollo-Loco',
      ],
    },
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens',
      ],
      image: 'Pollo loco 1.png',
      links: [
        '',
        'https://github.com/AlinaWetter/join',
      ],
    }, {
      title: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'API'],
      description: [
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      ],
      image: 'Pollo loco 1.png',
      links: [
        'http://pokedex.robert-aliaj.de/',
        'https://github.com/RobertAliaj/Pokedex',
      ],
    },
    //  {
    //   title: 'CRM Project',
    //   skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
    //   description: [
    //     'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens',
    //   ],
    //   image: 'Pollo loco 1.png',
    //   links: [
    //     '',
    //     '',
    //   ],
    // }
  ];
}


