import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FrontpageComponent} from './frontpage/frontpage.component';
import {ContactComponent} from './contact/contact.component';
import {MvpLabComponent} from './mvp-lab/mvp-lab.component';
import {WebDevelopmentComponent} from './web-development/web-development.component';
import {ProfessionalServicesComponent} from './professional-services/professional-services.component';

const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: '', component: FrontpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mvp-lab', component: MvpLabComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'professional-services', component: ProfessionalServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
