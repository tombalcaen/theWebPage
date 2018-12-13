import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://api.sendgrid.com/v3/mail/send';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'Bearer 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'
    })
  };

  body : Object = {};


  sendEmail(){
    
    this.body = 
    { personalizations: 
      [ { to: [{ email: 'tom.balcaen88@gmail.com'}],
          subject: 'Flock contact request!' } 
      ],
    from: { email: 'tom.balcaen88@gmail.com' },
    content: [ { type: 'text/plain', value: `Hello, World!
    <p>fullname: tom balcaen</p>
    <p>company: flock consulting</p>
    <p>phone: 0479752242</p>
    <p>email: <a href="mailto:tom.balcaen88@gmail.com">tom.balcaen88@gmail.com</a></p>
    <p>country: BE</p>
    <p>details: Dit zijn allemaal details</p>
    ` } ] 
    };



    this.http.post(this.endpoint,this.body,this.httpOptions).subscribe((response)=>{
      console.log(response)
    });
  }

  
}
