import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

private readonly apiUrl=environment.apiUrl+"SuperHero/";
constructor(private http:HttpClient){}

herolist:Hero[]=[
  {id:2, heroName:"Bo", realName:"", place:"road", debut:new Date(), powers:"Killer",},
  {id:3, heroName:"Bo", realName:"", place:"road", debut:new Date(), powers:"Killer",},
  {id:4, heroName:"Bo", realName:"", place:"road", debut:new Date(), powers:"Killer",}
];


  getAllHardcoded():Hero[]{
    return this.herolist;
  }
  getAll():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }
  getById(id:number):Observable<Hero>{
    return this.http.get<Hero>(this.apiUrl + id);
    //return this.herolist[id];
  }
  delete(id:number):Observable<Hero>{
    return this.http.delete<Hero>(this.apiUrl + id);
  }
}
