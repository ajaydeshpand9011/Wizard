import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { SkillsdetailsComponent } from './skillsdetails/skillsdetails.component';
import { ExperiancedetailsComponent } from './experiancedetails/experiancedetails.component';
import { WizardfinishedComponent } from './wizardfinished/wizardfinished.component';

const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },
  { path:'personal', component: PersonaldetailsComponent },
  { path:'contact', component: ContactdetailsComponent },
  { path:'skills', component: SkillsdetailsComponent },
  { path:'experience', component: ExperiancedetailsComponent },
  { path:'finish', component: WizardfinishedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
