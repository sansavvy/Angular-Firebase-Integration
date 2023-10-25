import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage, ref } from 'firebase/storage';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  isRegisterFormView: boolean = false;
  storage = getStorage();
  img1: any = null;
  constructor(private service: AuthService, public route: Router) {}

  ngOnInit() {}

  gotoHome() {
    this.route.navigateByUrl('/sign-in');
  }
  gotoStay() {
    this.route.navigateByUrl('/view-articles');
  }
  gotoplaces() {
    this.route.navigateByUrl('/explore-places');
  }
  gotoContact() {
    this.route.navigateByUrl('/contact');
  }
}
