import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DestroyObservableComponent } from '../../shared/destroy-observable.component';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends DestroyObservableComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl()
  });
  public isFormValid = true;

  constructor(private authService: AuthService) {
    super();
  }

  public ngOnInit(): void {
    this.loginForm.get('email').valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => this.isFormValid = true);
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      this.authService.login(email);
    } else {
      this.isFormValid = false;
    }
  }
}
