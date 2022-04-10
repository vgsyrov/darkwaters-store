import { ActionReducerMap } from '@ngrx/store';
import { IAddressState } from '../state/address.state';
import { IProductsState } from '../state/products.state';
import { addressReducer, ADDRESS_FEATURE } from './address.reducer';
import { productsReducer, PRODUCTS_FEATURE } from './products.reducer';

export interface IState {
	[ADDRESS_FEATURE]: IAddressState;
	[PRODUCTS_FEATURE]: IProductsState;
} // {address: IAddressState}

export const reducers: ActionReducerMap<IState> = {
	[ADDRESS_FEATURE]: addressReducer,
	[PRODUCTS_FEATURE]: productsReducer,
};
