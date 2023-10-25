import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent {
  userdesc: string = '';
  userMail: string = '';
  responseSent: boolean = false;

  constructor(private route: Router, private auth: AuthService) {}

  gotoHome() {
    this.route.navigateByUrl('/sign-in');
  }
  onSend() {
    let payload = {
      Mail: this.userMail,
      Comments: this.userdesc,
    };
    this.auth.onSendContact(payload).subscribe((res) => {
      console.log(res);
      if (res) {
        this.userMail = '';
        this.userdesc = '';
        this.responseSent = true;
      }
    });
  }
}
