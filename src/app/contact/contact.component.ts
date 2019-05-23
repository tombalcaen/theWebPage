import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../service/contact.service';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;

  constructor(private fb: FormBuilder,
              private _contact: ContactService) {
    this.createContactForm();
   }

  budget = [{value:"€0 - €5 000"},
            // {value:"€2 500 - €10 000"},
            {value:"€5 000 - €30 000"},
            {value:"€30 000 - €60 000"},
            {value:"€60 000+"}]

  ngOnInit() {
    
  }

  createContactForm(){
    this.contactForm = this.fb.group({
      fullName: ['',Validators.required],
      company: '',
      phone: '',
      email: ['',Validators.required],
      budget: '',
      country: '',
      requirements: ['',Validators.required],
      source: ''
    })
  }

  onSubmit(form){
    console.log("contact component")
    console.log(form)
    this._contact.processContactData(form).subscribe((data)=>{
      console.log(data)
    });
  }

}
