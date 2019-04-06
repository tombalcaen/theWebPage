import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InsightsService {

  constructor(private _http: HttpClient) { }

    // GET
    getArticles(): Observable<any>{  
      console.log("in services get all articles")  
      return this._http.get(environment.connection_uri + "article");
    }
  
    getArticleById(_id): Observable<any>{
      console.log("in service get articles by id")  
      return this._http.get(environment.connection_uri + 'article/id?_id=' + _id);
    }
}
