import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CustomBtnComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CustomBtnComponent,
    FooterComponent
  ]
})
export class SharedModule { }
