import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(public translate: TranslateService, public router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');
  }

}
