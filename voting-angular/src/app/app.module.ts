import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { VotingBoothComponent } from './voting-booth/voting-booth.component'
import { VotingResultComponent } from './voting-result/voting-result.component'
import { VotingCardComponent } from './voting-card/voting-card.component'
import { InputComponent } from './input/input.component'
import { VotingFormComponent } from './voting-form/voting-form.component'
import { VotingsComponent } from './votings/votings.component'

@NgModule({
  declarations: [
    AppComponent,
    VotingBoothComponent,
    VotingResultComponent,
    VotingCardComponent,
    InputComponent,
    VotingFormComponent,
    VotingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
