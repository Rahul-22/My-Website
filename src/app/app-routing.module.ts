import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchivementComponent } from './achivement/achivement.component';
import { ContactComponent } from './contact/contact.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path: 'Intern', component: InternshipComponent},
  {path: 'Proj', component: ProjectComponent},
  {path: 'Achive', component: AchivementComponent},
  {path: '', redirectTo: 'Intern', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
