import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule,MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

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
import { WebdesignComponent } from './webdesign/webdesign.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CloudPlatformComponent } from './cloud-platform/cloud-platform.component';
import { InsightsComponent } from './insights/insights.component';


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
    AboutComponent,
    WebdesignComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    CloudPlatformComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
