import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-label',
  template: `
    <label [for]="for" class="form-label">
      <ng-content></ng-content>
      <ng-container *ngIf="required">*</ng-container>
    </label>
  `,
  styles: [],
  imports: [NgIf],
  standalone: true,
})
export class LabelComponent {
  @Input() for?: string;
  @Input() control!: AbstractControl;

  get required(): boolean {
    return this.control.hasValidator(Validators.required);
  }
}
