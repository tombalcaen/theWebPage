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

  body = 
  { personalizations: 
    [ { to: [{ email: 'tom.balcaen88@gmail.com'}],
        subject: 'Hello, World!' } 
    ],
   from: { email: 'sam.smith@example.com' },
   content: [ { type: 'text/plain', value: 'Hello, World!' } ] 
  };


  sendEmail(){
    console.log("sendemail")
    this.http.post(this.endpoint,this.body,this.httpOptions).subscribe((response)=>{
      console.log(response)
    });
  }

  
}
