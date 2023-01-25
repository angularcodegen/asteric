import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelComponent } from './label.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container my-5">
      <form [formGroup]="form">
        <div class="mb-3">
          <app-label for="login" [control]="form.controls.login"> Login </app-label>
          <input type="login" class="form-control" id="login" formControlName="login" />
          <button type="button" class="btn btn-primary mt-3" (click)="toggleValidator(form.controls.login)">
            Toggle login validator
          </button>
        </div>
        <div class="mb-3">
          <app-label for="password" [control]="form.controls.password"> Password </app-label>
          <input type="password" class="form-control" id="password" formControlName="password" />
          <button type="button" class="btn btn-primary mt-3" (click)="toggleValidator(form.controls.password)">
            Toggle password validator
          </button>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent],
  styles: [],
})
export class AppComponent {
  form = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  toggleValidator(control: AbstractControl): void {
    control.hasValidator(Validators.required)
      ? control.removeValidators(Validators.required)
      : control.setValidators(Validators.required);
  }
}
