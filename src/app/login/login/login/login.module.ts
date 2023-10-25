import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormModule } from 'src/app/forms/form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from 'src/app/forms/form/cards/cards.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    FormModule,
    FormsModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginModule {}
