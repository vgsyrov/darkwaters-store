import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { resetProducts, setProducts, updateProductsCount, addToBasket } from '../actions/products.actions';
import {
	IProductsState,
	productsEntityAdapter,
	productsInitialState,
} from '../state/products.state';
import {IProduct} from "../../models/product-info.model";
import {Dictionary} from "@ngrx/entity";

export const PRODUCTS_FEATURE = 'products';

export const productsReducer = createReducer<IProductsState>(
	productsInitialState,
	on(setProducts, (state, { products }) => productsEntityAdapter.upsertMany(products, state)),
	on(resetProducts, (state) => productsEntityAdapter.removeAll(state)),
	on(updateProductsCount, (state, { id, count }) =>
		productsEntityAdapter.updateOne(
			{
				id,
				changes: {
					count,
				},
			},
			state,
		),
	),
  on(addToBasket, (state, {id}) => ({
    ...state,
    basketIds: [
      ...state.basketIds,
      id
    ]
  }))
);

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);

export const getBasketIds = createSelector(
  productsFeatureSelector,
  (products: IProductsState) => products.basketIds
);

export const {
	selectAll: getProducts,
	selectIds: getProductsIds,
	selectEntities: getProductsEntities,
} = productsEntityAdapter.getSelectors(productsFeatureSelector);

export const getProduct = createSelector(
    getProductsEntities,
    (products: Dictionary<IProduct>, id: string) => products[id],
)
