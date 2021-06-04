import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=5cad67567f494396e62c2c1691400568`);
  }
}
