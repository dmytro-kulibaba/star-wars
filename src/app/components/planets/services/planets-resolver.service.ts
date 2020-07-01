import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetsService } from './planets.service';
import { Planet } from '../models/planet.model';

@Injectable()
export class PlanetsResolverService implements Resolve<Planet[]>{

  constructor(private planetsService: PlanetsService) {
  }

  resolve(): Observable<Planet[]> {
    return this.planetsService.getPlanets();
  }
}
