import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FrontpageComponent} from './frontpage/frontpage.component';
import {ContactComponent} from './contact/contact.component';
import {MvpLabComponent} from './mvp-lab/mvp-lab.component';
import {WebDevelopmentComponent} from './web-development/web-development.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import {ProfessionalServicesComponent} from './professional-services/professional-services.component';
import { EngagementComponent } from './engagement/engagement.component';
import { JobsComponent } from './jobs/jobs.component';
import { TechComponent } from './tech/tech.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: '', component: FrontpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mvp-lab', component: MvpLabComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'webdesign', component: WebdesignComponent },  
  { path: 'professional-services', component: ProfessionalServicesComponent },
  { path: 'engagement', component: EngagementComponent },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'we-want-you', component: JobsComponent },
  { path: 'we-love-tech', component: TechComponent },
  { path: 'contact-us', component: ContactPageComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
