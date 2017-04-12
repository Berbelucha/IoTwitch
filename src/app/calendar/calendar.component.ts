import {Component, OnInit} from '@angular/core';
import {SocialApiService} from '../social-api.service';
import * as _ from 'lodash';

interface IFacebookPost {
  created_time: string;
  description: string;
  link: string;
  message: string;
  object_id: string;
  permalink_url: string;
  picture: string;
  type: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private dates = [];

  constructor(private socialApi: SocialApiService) {
    this.socialApi.fb.getLoginStatus().then((res) => {
      this.socialApi.accessToken = res.authResponse.accessToken;
      this.getFacebookPosts();
    });
  }

  private getFacebookPosts() {
    this.socialApi.fb.api('/berbeluchayt/feed', 'get', {
      limit: 10,
      access_token: this.socialApi.accessToken,
      fields: [
        'created_time',
        'description',
        'link',
        'message',
        'object_id',
        'permalink_url',
        'full_picture',
        'type'
      ]
    }).then((data) => {
      const facebook = data.data.map((value) => {
        const date = new Date(value.created_time);
        return Object.assign(value, {
          platform: 'Facebook', created_time: date,
          date: `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`
        });
      });
      this.dates = _.chain(facebook)
        .groupBy('date')
        .map((values, key) => ({
          day: values[0].created_time.getUTCDate(),
          month: values[0].created_time.toLocaleString('pl-pl', {month: 'short'}).toUpperCase(),
          cards: values
        }))
        .value();
      console.log(this.dates);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {

  }
}
