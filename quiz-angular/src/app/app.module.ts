import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VotingBoothComponent } from './voting-booth/voting-booth.component';
import { VotingResultComponent } from './voting-result/voting-result.component';
import { VotingCardComponent } from './voting-card/voting-card.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingBoothComponent,
    VotingResultComponent,
    VotingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
