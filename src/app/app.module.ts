import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyComponent } from './company/company.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { MvpLabComponent } from './mvp-lab/mvp-lab.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProfessionalServicesComponent } from './professional-services/professional-services.component';
import { EngagementComponent } from './engagement/engagement.component';
import { JobsComponent } from './jobs/jobs.component';
import { TechComponent } from './tech/tech.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CompanyComponent,
    WebDevelopmentComponent,
    MvpLabComponent,
    FrontpageComponent,
    ProfessionalServicesComponent,
    EngagementComponent,
    JobsComponent,
    TechComponent,
    ContactPageComponent,
    CaseStudyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
