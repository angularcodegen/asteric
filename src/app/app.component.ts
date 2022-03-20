import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="container my-5">
      <form [formGroup]="form">
        <div class="mb-3">
          <app-label for="lgoin" [control]="form.get('login')!"> Login </app-label>
          <input type="login" class="form-control" id="lgoin" formControlName="login" />
          <button type="button" class="btn btn-primary mt-3" (click)="toggleValidator(form.get('login')!)">
            Toggle login validator
          </button>
        </div>
        <div class="mb-3">
          <app-label for="password" [control]="form.get('password')!"> Password </app-label>
          <input type="password" class="form-control" id="password" formControlName="password" />
          <button type="button" class="btn btn-primary mt-3" (click)="toggleValidator(form.get('password')!)">
            Toggle password validator
          </button>
        </div>
      </form>
    </div>
  `,
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
