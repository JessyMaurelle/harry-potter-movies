import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = "/movies";

  constructor(private http : HttpClient) { }

  public getAllMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
  public getMovieById(movieId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${movieId}`);
  }
  
  
}
