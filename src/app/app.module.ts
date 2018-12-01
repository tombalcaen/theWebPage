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

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CompanyComponent,
    WebDevelopmentComponent,
    MvpLabComponent,
    FrontpageComponent,
    ProfessionalServicesComponent
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
