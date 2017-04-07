import {Component, OnInit} from '@angular/core';
import {SocialApiService} from '../social-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private loggedIn = {
    twitch: false,
    facebook: false,
    instagram: false
  };

  constructor(private socialApi: SocialApiService) {
    this.socialApi.fb.getLoginStatus().then(res => {
      this.socialApi.accessToken = res.authResponse.accessToken;
      this.loggedIn.facebook = res.status === 'connected';
    });
  }

  ngOnInit() {
  }

  loginWithFacebook(): void {
    if (!this.loggedIn.facebook) {
      this.socialApi.fb.login().then((res) => {
        this.socialApi.accessToken = res.authResponse.accessToken;
        this.loggedIn.facebook = true;
      });
    } else {
      this.socialApi.fb.logout().then(() => {
        this.loggedIn.facebook = false;
      });
    }

  }

}
