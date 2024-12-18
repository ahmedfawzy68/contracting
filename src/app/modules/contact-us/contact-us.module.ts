import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MapComponent } from './components/map/map.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    ContactUsComponent,
    MapComponent,
    ContactUsFormComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    ToastModule
  ]
})
export class ContactUsModule { }
