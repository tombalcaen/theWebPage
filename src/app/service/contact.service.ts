import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  processContactData(contactObj): Observable<any>{
    return this._http.post("https://1ql8aa365a.execute-api.eu-west-3.amazonaws.com/PROD/contact-processing",contactObj);
  }

}
