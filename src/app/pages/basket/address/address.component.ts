import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IState } from '../../../store/reducers';
import {
  addAddress,
  resetAddress,
} from '../../../store/actions/address.actions';
import { Observable, tap } from 'rxjs';
import { IAddressState } from '../../../store/state/address.state';
import { addressFeatureSelector } from '../../../store/reducers/address.reducer';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export class AddressComponent {
  address$: Observable<IAddressState> = this.store.pipe(
    select(addressFeatureSelector),
    tap((address) => {
      this.addressForm.setValue(address);
    })
  );
  addressForm = this.formBuilder.group({
    country: ['RUS', [Validators.required]],
    city: ['Moscow', [Validators.required]],
    street: ['', [Validators.required]],
    homeInfo: this.formBuilder.group({
      number: null,
      block: null,
    }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IState>,
    private messageService: MessageService
  ) {}

  onPush() {
    this.store.dispatch(addAddress(this.addressForm.getRawValue()));
    this.messageService.add({
      severity: 'success',
      summary: 'Заказ оформлен',
      detail: 'Ожидайте доставку по указанному адресу.',
    });
  }

  onReset() {
    this.store.dispatch(resetAddress());
  }
}
