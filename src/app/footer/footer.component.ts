import {Component, OnInit} from '@angular/core';
import {SocialApiService} from '../social-api.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationModalComponent} from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private modal: NgbModalRef;
  private loggedIn = {
    twitch: false,
    facebook: false,
    instagram: false
  };

  constructor(private SocialApiService: SocialApiService,
              private NgbModal: NgbModal) {
    this.SocialApiService.fb.getLoginStatus().then(res => {
      this.SocialApiService.accessToken = res.authResponse.accessToken;
      this.loggedIn.facebook = res.status === 'connected';
    });
  }

  loginWithFacebook(): void {
    if (!this.loggedIn.facebook) {
      this.SocialApiService.fb.login().then((res) => {
        this.SocialApiService.accessToken = res.authResponse.accessToken;
        this.loggedIn.facebook = true;
      });
    } else {
      this.modal = this.NgbModal.open(ConfirmationModalComponent);
      this.modal.componentInstance.title = 'Wyloguj';
      this.modal.componentInstance.message = 'Czy na pewno chcesz się wylogować?';
      this.modal.result.then(() => {
        this.SocialApiService.fb.logout().then(() => {
          this.loggedIn.facebook = false;
        });
      }, () => {});
    }

  }

  ngOnInit() {
  }

}
