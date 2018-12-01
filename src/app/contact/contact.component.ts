import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.createContactForm();
   }

  ngOnInit() {
    
  }

  createContactForm(){
    this.contactForm = this.fb.group({
      fullName: '',
      company: '',
      phone: '',
      email: '',
      country: '',
    })
  }

  onSubmit(form){
    console.log(form)
  }

}
