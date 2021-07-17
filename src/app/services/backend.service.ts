import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable, } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'my-header': 'rado'
    }),
    withCredentials: true
  };
  url = 'https://run.mocky.io/v3/38767674-00d4-4e6d-b045-a75fe7766251'

  postAPI() {

    const actionData = { 'action': 'get_report' }
    const apiData = {'input': actionData };
    const jsonData = JSON.stringify(apiData);
    return this.httpClient.post(this.url, jsonData, this.httpOptions)
  }

}