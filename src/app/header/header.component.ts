import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @ViewChild('iam') iam!: ElementRef;

  german = false;
  flagSrc = 'assets/img/header/german-flag.webp';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }


  toggleLanguage() {
    this.german = !this.german;
    this.translate.use(this.german ? 'de' : 'en');
    this.flagSrc = this.german ? 'assets/img/header/english-flag.webp' : 'assets/img/header/german-flag.webp';
  }
}