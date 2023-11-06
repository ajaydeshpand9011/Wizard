import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { SkillsdetailsComponent } from './skillsdetails/skillsdetails.component';
import { ExperiancedetailsComponent } from './experiancedetails/experiancedetails.component';
import { WizardfinishedComponent } from './wizardfinished/wizardfinished.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaldetailsComponent,
    ContactdetailsComponent,
    SkillsdetailsComponent,
    ExperiancedetailsComponent,
    WizardfinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
