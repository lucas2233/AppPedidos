import { Restaurante } from './../models/restaurante/restaurante';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
const httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
   providedIn: 'root'
})
export class RestaurantesService {
  
  private heroesUrl = 'api/heroes'; // URL to web api 
  private url: string;
  constructor(
    private http: HttpClient,
    ){
      this.url = "http://marmita.idsgeo.com/index.php/page/get_ionic";
    }
  /** GET heroes from the server */
  getRestaurantes (): Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.url)
    .pipe(
      tap(todos => this.log('listando restaurantes')),
      catchError(this.handleError('getRestaurantes', []))
    );
  } 

    searchHeroes(term: string): Observable<Hero[]>{
      if(!term.trim()){
      // if not search term, return empty hero array.
      return of([]);
  }
    return this.http.get<Hero[]>('${this.heroesUrl}/?name=${term}').pipe(
     tap(_ => this.log('found heroes matching "${tem}"')),
     catchError(this.handleError<Hero[]>('searchHeroes',[]))
   ); 
}
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation = name of operation that failed
 * @param result - optional value to return as the observable
 */
private handleError<T> (operation = 'operation',result?: T){
  return (error: any): Observable<T> =>{
      // Todo: send the error to remote logging infrastructure
      console.error(error); //log to console instead
      this.log('${operation} failed: ${error.message}');
      // Let the app keep running by returning an empty result.
      return of(result as T); 
  };
}
private log(message string){
  console.log('HeroService: ${message}');
}