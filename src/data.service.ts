import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class DataService {

urlEndpoint = 'https://randomuser.me/api/';

  constructor(private http:HttpClient) { }
  getUser(){
    
  }

}