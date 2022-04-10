import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { resetProducts, setProducts, updateProductsCount } from '../actions/products.actions';
import {
	IProductsState,
	productsEntityAdapter,
	productsInitialState,
} from '../state/products.state';

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
);

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);

// export const getProductsIds = createSelector(
//     productsFeatureSelector,
//     (state: IProductsState) => selectIds(state),
// )

// export const getProducts = createSelector(
//     productsFeatureSelector,
//     (state: IProductsState) => selectAll(state),
// )

// export const getBasketIds = createSelector(
//     productsFeatureSelector,
//     (state: IProductsState) => state.basketIds,
// )

export const {
	selectAll: getProducts,
	selectIds: getProductsIds,
	selectEntities: getProductsEntities,
} = productsEntityAdapter.getSelectors(productsFeatureSelector);

// export const getProduct = createSelector(
//     getProductsEntities,
//     (products: Dictionary<IProduct>, id: string) => products[id],
// )
