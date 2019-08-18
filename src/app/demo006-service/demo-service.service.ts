import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DemoServiceService {

  heroes = [
    {
      name: '兰陵王',
      emotion: 'happy'
    },
    {
      name: '荆轲',
      emotion: 'sad'
    },
    {
      name: '李白',
      emotion: 'unknown'
    },
  ];

  constructor(private http: HttpClient) {
  }


  getHeroes() {
    return this.heroes;
  }


  getHeroesObservable(): Observable<any> {
    return of(this.heroes);
  }


  getHeroesObservableMock(): Observable<any> {
    return this.http.get('./assets/mock/mock-heroes.ts');
  }
}
