import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class DestroyObservableComponent implements OnDestroy {
  private destroy = new Subject<void>();
  public destroy$ = this.destroy.asObservable();

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
