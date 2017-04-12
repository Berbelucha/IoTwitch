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
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    DayComponent,
    ConfirmationModalComponent
  ],
  providers: [SocialApiService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot()
  ]
})
export class AppModule { }
