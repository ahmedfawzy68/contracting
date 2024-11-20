import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CarouselModule } from 'primeng/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhyUsSectionComponent } from './components/why-us-section/why-us-section.component';
import { BookConsultationSectionComponent } from './components/book-consultation-section/book-consultation-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { GoalsSectionComponent } from './components/goals-section/goals-section.component';
import { OurProjectsSectionComponent } from './components/our-projects-section/our-projects-section.component';
import { TestmonialSectionComponent } from './components/testmonial-section/testmonial-section.component';
import { RequestConsultationSectionComponent } from './components/request-consultation-section/request-consultation-section.component';
import { SwiperComponent } from './components/swiper/swiper.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    WhyUsSectionComponent,
    BookConsultationSectionComponent,
    ServicesSectionComponent,
    GoalsSectionComponent,
    OurProjectsSectionComponent,
    TestmonialSectionComponent,
    RequestConsultationSectionComponent,
    SwiperComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    TranslateModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }