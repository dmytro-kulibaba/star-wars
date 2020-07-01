import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs/operators';
import { PlanetsService } from '../services/planets.service';
import { Planet } from '../models/planet.model';
import { DestroyObservableComponent } from '../../shared/destroy-observable.component';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetDetailsComponent extends DestroyObservableComponent implements OnInit, OnDestroy {
  public planet: Planet;

  constructor(private planetsService: PlanetsService,
              private activatedRoute: ActivatedRoute,
              private cd: ChangeDetectorRef) {
    super();
  }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: any) => params.planetName),
      filter(Boolean),
      takeUntil(this.destroy$),
    ).subscribe((planetName: string) => {
      this.planetsService.getPlanet(planetName).subscribe((planet: Planet) => {
        this.planet = planet;
        this.cd.markForCheck();
      });
    });
  }
}
