import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { OurWorksComponent } from './components/our-works/our-works.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    OurWorksComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class PortfolioModule { }
