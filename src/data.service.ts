import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from './result';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlEndpoint = 'https://randomuser.me/api/?results=1';

  constructor(private http: HttpClient) {}

  getUser(): Observable<Result>{
    return this.http.get<Result>(this.urlEndpoint).pipe(
    map(this.mapResponse)
    )
  }

  private mapResponse(response: Result): Result {
    return {
      info: { ...response.info },
      results: response.results.map(
        (user: any) =>
          <User>{
            firstName: user.name.first,
            lastName: user.name.last,
            username: user.login.username,
            gender: user.gender,
            dateOfBirth: user.dob.date,
            imageUrl: user.picture.thumbnail,
          }
      ),
    };
  }
}
