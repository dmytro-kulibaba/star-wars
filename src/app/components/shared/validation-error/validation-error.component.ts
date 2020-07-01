import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorComponent {

  @Input()
  public errorMessage: string;
}
