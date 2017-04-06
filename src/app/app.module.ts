import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import {RouterModule, Routes} from '@angular/router';
import { SocialCardComponent } from './social-card/social-card.component';
import { FooterComponent } from './footer/footer.component';
import {DayComponent} from './day/day.component';

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
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ]
})
export class AppModule { }
