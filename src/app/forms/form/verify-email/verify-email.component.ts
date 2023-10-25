import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent {
  constructor(public authService: AuthService, public route: Router) {}
  openSignIn() {
    this.route.navigateByUrl('sign-in');
  }
}
