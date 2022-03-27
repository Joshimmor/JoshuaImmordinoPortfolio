import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  GetReadMes(URL:string):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    // headers.set( 'responseType', 'text')
    return this.http.get<any>('https://raw.githubusercontent.com/'+URL,{headers,responseType:'text' as 'json'})
  }
}
