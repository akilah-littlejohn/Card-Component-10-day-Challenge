import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from './result';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlEndpoint = 'https://randomuser.me/api/?results=1';

  constructor(private http: HttpClient) {}
  private mapResponse(response: Result): Result {
    return;
  }
}
