import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { PlanetsResolverService } from './services/planets-resolver.service';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { AuthGuardService } from '../auth/services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PlanetsComponent,
  resolve: {
    planets: PlanetsResolverService
  },
  canActivate: [AuthGuardService]
}, {
  path: ':planetName',
  component: PlanetDetailsComponent,
  canActivate: [AuthGuardService]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule {
}
