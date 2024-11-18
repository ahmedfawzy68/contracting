import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CarouselModule } from 'primeng/carousel';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhyUsSectionComponent } from './components/why-us-section/why-us-section.component';
import { BookConsultationComponent } from './components/book-consultation/book-consultation.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { GoalsSectionComponent } from './components/goals-section/goals-section.component';
import { OurProjectsSectionComponent } from './components/our-projects-section/our-projects-section.component';
import { TestmonialSectionComponent } from './components/testmonial-section/testmonial-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    AboutUsSectionComponent,
    WhyUsSectionComponent,
    BookConsultationComponent,
    ServicesSectionComponent,
    GoalsSectionComponent,
    OurProjectsSectionComponent,
    TestmonialSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    TranslateModule,
    SharedModule
  ]
})
export class HomeModule { }
