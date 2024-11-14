import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CustomBtnComponent } from './components/custom-btn/custom-btn.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CustomBtnComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CustomBtnComponent
  ]
})
export class SharedModule { }
