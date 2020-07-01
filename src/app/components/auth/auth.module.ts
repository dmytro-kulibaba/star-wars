import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from '../shared/validation-error/validation-error.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthService,
    AuthGuardService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationErrorModule
  ]
})
export class AuthModule { }
