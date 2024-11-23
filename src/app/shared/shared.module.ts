import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoverComponent } from './components/cover/cover.component';
import { IntroSectionComponent } from '../modules/home/components/intro-section/intro-section.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';
import { CustomSkeltonComponent } from './components/skeltons/custom-skelton/custom-skelton.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CustomBtnComponent,
    FooterComponent,
    IntroSectionComponent,
    CoverComponent,
    CustomInputComponent,
    WhatsappBtnComponent,
    CustomSkeltonComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CustomBtnComponent,
    FooterComponent,
    IntroSectionComponent,
    CoverComponent,
    CustomInputComponent,
    WhatsappBtnComponent,
    CustomSkeltonComponent
  ]
})
export class SharedModule { }
