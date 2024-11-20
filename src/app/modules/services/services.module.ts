import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { OffersComponent } from './components/offers/offers.component';
import { ServicesCardComponent } from './components/offers/components/services-card/services-card.component';


@NgModule({
  declarations: [
    ServicesComponent,
    OffersComponent,
    ServicesCardComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class ServicesModule { }
