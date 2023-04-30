import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {

  constructor(public translate: TranslateService) { }

  @ViewChild('menuBtn') menuBtn!: ElementRef;

  german = false;
  menuOpen = false;



  ngAfterViewInit(): void {
    let menuBtn = this.menuBtn.nativeElement;

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      // !this.menuOpen ? this.openMenu(menuBtn) : this.closeMenu(menuBtn);
    });
  }


  openMenu(menuBtn: HTMLElement) {
    // menuBtn.classList.add('open');
    this.menuOpen = true;
  }

  closeMenu(menuBtn: HTMLElement) {
    // menuBtn.classList.remove('open');
    this.menuOpen = false;
  }


  germanImg() {
    this.german = false;
  }

  englishImg() {
    this.german = true;
  }
}