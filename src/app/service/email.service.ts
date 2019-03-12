import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://api.sendgrid.com/v3/mail/send';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'Bearer '//+ process.env.SENDGRID_API_KEY
    })
  };

  body : Object = {};


  sendEmail(details){
    
    this.body = 
    { personalizations: 
      [ { to: [{ email: 'tom.balcaen88@gmail.com'}],
          subject: 'Ahodos contact request!' } 
      ],
    from: { email: 'tom.balcaen88@gmail.com' },
    content: [ { type: 'text/plain', value: `Hello, World!
    <p>fullname: ` + details.fullName + `</p>
    <p>company: ` + details.company + `</p>
    <p>phone: ` + details.phone + `</p>
    <p>email: <a href="mailto:` + details.email + `">` + details.email + `</a></p>
    <p>country: ` + details.country + `</p>
    <p>details: ` + details.requirements + `</p>
    <p>source: ` + details.source + `</p>
    <p>budget: ` + details.budget + `</p>
    ` } ] 
    };

    this.http.post(this.endpoint,this.body,this.httpOptions).subscribe((response)=>{
      console.log(response)
    });
  }

  
}
