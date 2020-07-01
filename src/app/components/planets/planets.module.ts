import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { PlanetsService } from './services/planets.service';
import { PlanetsResolverService } from './services/planets-resolver.service';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetDetailsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ],
  providers: [
    PlanetsService,
    PlanetsResolverService,
  ]
})
export class PlanetsModule { }
