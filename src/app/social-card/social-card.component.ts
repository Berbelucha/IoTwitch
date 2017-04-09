import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {

  @Input() platform;
  @Input() title;
  @Input() message;
  @Input() date;
  @Input() image;

  constructor() { }

  ngOnInit() {
  }
}
