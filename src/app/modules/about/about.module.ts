import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WhyChooseUsSectionComponent } from './components/why-choose-us-section/why-choose-us-section.component';
import { WhyUsCardComponent } from './components/why-choose-us-section/components/why-us-card/why-us-card.component';
import { WhyQemmetAlrawasiSectionComponent } from './components/why-qemmet-alrawasi-section/why-qemmet-alrawasi-section.component';


@NgModule({
  declarations: [
    AboutComponent,
    WhyChooseUsSectionComponent,
    WhyUsCardComponent,
    WhyQemmetAlrawasiSectionComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class AboutModule { }
