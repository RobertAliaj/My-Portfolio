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
        '',
        '',
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
        '',
      ],
    }, {
      title: 'CRM Project',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens',
      ],
      image: 'Pollo loco 1.png',
      links: [
        '',
        '',
      ],
    }, {
      title: 'CRM Project',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      description: [
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens',
      ],
      image: 'Pollo loco 1.png',
      links: [
        '',
        '',
      ],
    }
  ];
}


