import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ng2-facebook-sdk';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import {RouterModule, Routes} from '@angular/router';
import { SocialCardComponent } from './social-card/social-card.component';
import { FooterComponent } from './footer/footer.component';
import {DayComponent} from './day/day.component';
import {SocialApiService} from './social-api.service';

const routes: Routes = [
  {path: '', component: CalendarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    SocialCardComponent,
    FooterComponent,
    DayComponent
  ],
  providers: [SocialApiService],
  bootstrap: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    FacebookModule.forRoot()
  ]
})
export class AppModule { }
