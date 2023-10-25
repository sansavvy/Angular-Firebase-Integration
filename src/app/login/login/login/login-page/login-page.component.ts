import { Component, OnInit, inject } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  isSignUp: boolean = false;

  loginForm!: FormGroup;
  signupForm!: FormGroup;
  userNameErrorMsg: string = '';
  pwErrorMsg: string = '';
  showToaster: boolean = false;
  userNamefieldErrorMsg: string = '';
  pwfieldErrorMsg: string = '';
  emailErrorMsg: string = '';

  constructor(
    private route: Router,
    private fb: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }
  navigateToForm() {
    this.isSignUp = true;
    this.createSignUpForm();
    // this.route.navigateByUrl('/sign-up-form');
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, , Validators.email]],

      passWord: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
          ),
          Validators.minLength(8),
        ],
      ],
    });
  }

  createSignUpForm() {
    this.signupForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-z0-9]*$/),
          Validators.minLength(3),
        ],
      ],

      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
          ),
          Validators.minLength(8),
        ],
      ],
      emailId: [null, [Validators.required, Validators.email]],
    });
  }

  BackToLogin() {
    this.isSignUp = false;
  }
  // openCards(loginValues: any) {
  //   if (this.loginForm.valid) {
  //     // signInWithEmailAndPassword(
  //     //   this.auth,
  //     //   loginValues.get('userName')?.value,
  //     //   loginValues.get('passWord')?.value
  //     // )
  //     //   .then((userCredential) => {
  //     //     console.log('logged In');
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error.code);
  //     //   });
  //   } else {
  //     if (this.loginForm.get('userName')?.errors?.['required']) {
  //       this.userNameErrorMsg = 'UserName is required';
  //     }
  //     if (this.loginForm.get('passWord')?.errors?.['required']) {
  //       this.pwErrorMsg = 'Password is required';
  //     }
  //   }
  // }
  onclickSignup() {
    if (this.signupForm.valid) {
      this.showToaster = true;
      this.isSignUp = false;
      let userData = {
        Name: this.signupForm.get('username')?.value,
        Email: this.signupForm.get('emailId')?.value,
        password: this.signupForm.get('password')?.value,
      };
      if (this.signupForm.valid) {
        // this.formsService.SignUp(
        //   this.signupForm.value.email,
        //   this.signupForm.value.password
        // );
      }
      // this.addUserProfile(userData);
    } else {
      if (this.signupForm.get('username')?.errors?.['required']) {
        this.userNamefieldErrorMsg = 'UserName is required';
      }
      if (this.signupForm.get('password')?.errors?.['required']) {
        this.pwfieldErrorMsg = 'Password is required';
      }
      if (this.signupForm.get('emailId')?.errors?.['required']) {
        this.emailErrorMsg = 'Email is required';
      }
    }
  }
  oncloseToaster() {
    this.showToaster = false;
  }
  addUserProfile(data: any) {
    // this.formsService.createNewUserData(data);
  }
}

// export Interface UserProfile {
//   Name:string
//   Email:string
//   password:string
// }
