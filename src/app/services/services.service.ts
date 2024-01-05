import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ResponseAPIRickAndMorty } from '../interfaces/responseAPIRickAndMorty.interface';

@Injectable({
  providedIn: 'root'
})
export class Services {

  _http = inject(HttpClient);
  urlCharacter = "https://rickandmortyapi.com/api/character"; 

  GetAllEpisodes () {
    return this._http.get<ResponseAPIRickAndMorty>(this.urlCharacter)
  }
}
