import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-out-menu',
  templateUrl: './slide-out-menu.component.html',
  styleUrls: ['./slide-out-menu.component.scss']
})
export class SlideOutMenuComponent implements AfterViewInit {
  
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  toggleMenu() {
    let menu = this.menu.nativeElement;
    menu.classList.toggle('open');

    if (menu.classList.contains('open')) {
      var listItems = menu.querySelectorAll('ul li');
      listItems.forEach(function (item: HTMLElement, index: number) {
        item.style.animationDelay = (index * 100) + 'ms';
      });
    }
  }






  ngAfterViewInit(): void {
    let menuBtn = this.menuBtn.nativeElement;
    
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      this.toggleMenu();
    });
  }

}
