import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: QuantityInputComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: QuantityInputComponent,
    },
  ],
})
export class QuantityInputComponent implements ControlValueAccessor, Validator {
  quantity!: number;

  disabled: boolean = false;
  private touch: boolean = false;

  onChange = (_counter: number) => {};
  onTouch = () => {};

  onUp() {
    this.quantity += 1;
    this.onChange(this.quantity);
    this.markTouch();
  }

  onDown() {
    this.quantity -= 1;
    this.onChange(this.quantity);
    this.markTouch();
  }

  markTouch() {
    if (this.touch) {
      return;
    }

    this.touch = true;
    this.onTouch();
  }

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  validate(control: AbstractControl): ValidationErrors | null {
    return { error: 'error' };
  }

  writeValue(obj: any): void {}
}
