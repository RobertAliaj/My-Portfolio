import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})

export class IntroductionComponent {

  changeLang = true;

  constructor(public translate: TranslateService) {


    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      
      this.changeLang = !this.changeLang;
      console.log(this.changeLang);
    });
  }
}