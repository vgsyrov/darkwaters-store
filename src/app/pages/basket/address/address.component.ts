import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
  addressForm = this.formBuilder.group({
    country: ['RUS', [Validators.required]],
    city: ['Moscow', [Validators.required]],
    street: ['', [Validators.required]],
    homeInfo: this.formBuilder.group({
      number: null,
      block: null,
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  onPush() {}

  onReset() {}
}
