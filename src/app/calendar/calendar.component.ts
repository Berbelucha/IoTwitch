import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private cards = {};
  private dates = {};

  constructor() { }

  ngOnInit() {
    this.dates = [{
      day: 6,
      month: 'kwiecień',
      cards: [{
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }, {
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }, {
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }]
    }, {
      day: 5,
      month: 'kwiecień',
      cards: [{
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }, {
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }, {
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }]
    }, {
      day: 4,
      month: 'kwiecień',
      cards: [{
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }, {
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }, {
        title: 'Test title',
        message: 'Test message whatever',
        date: '2 days ago',
        image: '/assets/image.jpg'
      }]
    }];
  }
}
