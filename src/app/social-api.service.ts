import {Injectable} from '@angular/core';
import {FacebookService, InitParams, LoginResponse} from 'ng2-facebook-sdk';

@Injectable()
export class SocialApiService {
  public accessToken: string;

  constructor(public fb: FacebookService) {
    this.initFacebook();
  }

  private initFacebook() {
    const initParams: InitParams = {
      appId: '636066713258805',
      xfbml: true,
      version: 'v2.8',
      cookie: true,
      status: true
    };
    this.fb.init(initParams);
  }

}
