import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CardsComponent } from './cards/cards.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterFormComponent,
    CardsComponent,
    DetailCardComponent,
    VerifyEmailComponent,
  ],
  imports: [CommonModule, FormRoutingModule, FormsModule],
  exports: [RegisterFormComponent, CardsComponent],
})
export class FormModule {}
