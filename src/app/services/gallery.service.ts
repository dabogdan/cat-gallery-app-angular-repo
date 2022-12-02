import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Breed, CatImage } from '../state/gallery.state'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  BASE_URL: string = 'https://api.thecatapi.com/v1';
  API_KEY: string = '' //please insert your API_KEY here

  constructor(private http: HttpClient) { }

  public getBreeds(): Observable<Breed[]>{
    return this.http.get<Breed[]>(`${this.BASE_URL}/breeds`)
  }

  public getImages(limit: string = '10', breed_ids?: string): Observable<CatImage[]>{
    const params = breed_ids ?
      new HttpParams().set('limit', limit).set('breed_ids', breed_ids).set('api_key', this.API_KEY) :
      new HttpParams().set('limit', limit).set('api_key', this.API_KEY)
    return this.http.get<CatImage[]>(`${this.BASE_URL}/images/search?` + params)
  }

}
