import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { JoinComponent } from './join/join.component';
import { PolloLocoComponent } from './pollo-loco/pollo-loco.component';
import { CrmComponent } from './crm/crm.component';
import { ContactTitleComponent } from './contact-title/contact-title.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    IntroductionComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    JoinComponent,
    PolloLocoComponent,
    CrmComponent,
    ContactTitleComponent,
    ImprintComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
