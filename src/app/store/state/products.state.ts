import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IProduct } from '../../models/product-info.model';

export interface IProductsState extends EntityState<IProduct> {
  basketIds: string[];
}

export const productsEntityAdapter = createEntityAdapter<IProduct>();

export const productsInitialState = productsEntityAdapter.getInitialState({
  basketIds: [],
});
