import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';

const PLANETS_BASE_URL = 'http://private-anon-5b2bae4500-starhub.apiary-mock.com/api/planets';

@Injectable()
export class PlanetsService {

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(PLANETS_BASE_URL);
  }

  getPlanet(planetName: string): Observable<Planet> {
    return this.http.get<Planet>(`${PLANETS_BASE_URL}/${planetName}`);
  }
}
