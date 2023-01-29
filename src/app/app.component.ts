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
          <input type="login" class="form-control" id="login" formControlName="login" autocomplete="off" />
        </div>
        <div class="mb-3">
          <app-label for="password" [control]="form.controls.password"> Password </app-label>
          <input type="password" class="form-control" id="password" formControlName="password" autocomplete="off" />
        </div>
        <div class="flex gap-3 flex-wrap sm:flex-nowrap mt-8">
          <button type="button" (click)="toggleValidator(form.controls.password)">Toggle password validator</button>
          <button type="button" (click)="toggleValidator(form.controls.login)">Toggle login validator</button>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent],
  styles: [
    `
      .form-control {
        @apply border text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500;
      }

      button {
        @apply text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-gray-500 disabled:bg-gray-500;
      }
    `,
  ],
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
