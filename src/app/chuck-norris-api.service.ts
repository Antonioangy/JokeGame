import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChuckNorrisApiService {
  baseUrl: string = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/categories`);
  }

  getJokesByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/random?category=${category}`);
  }

  getRandomJoke(): Observable<any> {
    return this.http.get(`${this.baseUrl}/random`);
  }
}
