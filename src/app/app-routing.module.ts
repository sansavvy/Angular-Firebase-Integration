import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login/login/login-page/login-page.component';
import { FormRoutingModule } from './forms/form/form-routing.module';
import { LoginRoutingModule } from './login/login/login/login-routing.module';
import { RegisterFormComponent } from './forms/form/register-form/register-form.component';
import { VerifyEmailComponent } from './forms/form/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CardsComponent } from './forms/form/cards/cards.component';
import { DetailCardComponent } from './forms/form/detail-card/detail-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },

  { path: 'sign-in', component: LoginPageComponent },
  {
    path: 'view-articles',
    component: CardsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'explore-places',
    component: RegisterFormComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'contact', component: DetailCardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormRoutingModule,
    LoginRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
