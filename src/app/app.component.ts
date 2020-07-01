import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DestroyObservableComponent } from './components/shared/destroy-observable.component';
import { AuthService } from './components/auth/services/auth.service';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends DestroyObservableComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(private authService: AuthService) {
    super();
  }

  public ngOnInit(): void {
    this.authService.authState$.pipe(
      startWith(this.authService.isLoggedIn()),
      takeUntil(this.destroy$)
    ).subscribe((isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn);
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
