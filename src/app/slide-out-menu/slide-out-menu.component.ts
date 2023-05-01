import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-out-menu',
  templateUrl: './slide-out-menu.component.html',
  styleUrls: ['./slide-out-menu.component.scss']
})
export class SlideOutMenuComponent implements AfterViewInit {

  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;


  ngAfterViewInit(): void {
    let menuBtn = this.menuBtn.nativeElement;
    this.toggleMenuThroughButton(menuBtn);
    this.closeMenuThroughLinks(menuBtn);
  }


  toggleMenuThroughButton(menuBtn: HTMLElement) {
    menuBtn.addEventListener('click', () => {
      this.menuButtonAnimation(menuBtn);
      this.toggleMenu();
    });
  };

  
  menuButtonAnimation(menuBtn: HTMLElement) {
    menuBtn.classList.toggle('open');
  }


  toggleMenu() {
    let menu = this.menu.nativeElement;
    menu.classList.toggle('open');
    this.menuLinksAnimation(menu);
  }


  menuLinksAnimation(menu: HTMLElement) {
    if (menu.classList.contains('open')) {
      var listItems = menu.querySelectorAll('ul li');
      listItems.forEach((item: any, index: number) => {
        item.style.animationDelay = (index * 100) + 'ms';
      });
    }
  }

  closeMenuThroughLinks(menuBtn: HTMLElement) {
    let menuLinks = this.menu.nativeElement.querySelectorAll('a');
    menuLinks.forEach((link: HTMLElement) => {
      link.addEventListener('click', () => {
        this.toggleMenu();
        menuBtn.classList.remove('open');
      });
    });
  }
}
