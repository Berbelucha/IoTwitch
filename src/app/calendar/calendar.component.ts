import { Component, OnInit } from '@angular/core';
import {SocialApiService} from '../social-api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private cards = {};
  private dates = {};

  constructor(private socialApi: SocialApiService) {
    this.socialApi.fb.getLoginStatus().then((res) => {
      this.socialApi.accessToken = res.authResponse.accessToken;
      this.getFacebookPosts();
    });
  }

  private getFacebookPosts() {
    this.socialApi.fb.api('/berbeluchayt/feed', 'get', {limit: 10, access_token: this.socialApi.accessToken}).then((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.dates = [{
      day: 6,
      month: 'kwiecień',
      cards: {
        facebook: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }],
        twitter: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }],
        instagram: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }]
      }
    }, {
      day: 3,
      month: 'kwiecień',
      cards: {
        facebook: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }],
        twitter: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }],
        instagram: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }]
      }
    }, {
      day: 1,
      month: 'kwiecień',
      cards: {
        facebook: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }],
        twitter: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }],
        instagram: [{
          title: 'Test title',
          message: 'Test message whatever',
          date: '2 days ago',
          image: '/assets/image.jpg'
        }]
      }
    }];
  }
}
