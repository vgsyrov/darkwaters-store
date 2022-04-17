import { createAction } from '@ngrx/store';
import { IProduct } from '../../models/product-info.model';

enum ProductsActionTypes {
  SetProducts = '[Products] Set products',
  ResetProducts = '[Products] Reset products',
  UpdateProductsCount = '[Products] Update products count',
  AddToBasket = '[Products] Add to basket',
  LoadProducts = '[Products] Load products',
  SetCategories = '[Products] Get categories list',
}

export const setProducts = createAction(
  ProductsActionTypes.SetProducts,
  (products: IProduct[]) => ({ products })
);
export const resetProducts = createAction(ProductsActionTypes.ResetProducts);
export const updateProductsCount = createAction(
  ProductsActionTypes.UpdateProductsCount,
  (id: string, count: number) => ({ id, count })
);

export const addToBasket = createAction(
  ProductsActionTypes.AddToBasket,
  (id: string) => ({ id })
);

export const loadProducts = createAction(ProductsActionTypes.LoadProducts);

export const setCategories = createAction(
  ProductsActionTypes.SetCategories,
  (categories: string[]) => ({ categories })
);
