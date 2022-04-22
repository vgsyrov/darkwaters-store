import { createAction } from '@ngrx/store';

enum UserActionTypes {
  AddShopSum = '[User] Add shop sum',
  ReduceShopSum = '[User] Reduce shop sum',
  ResetShopSum = '[User] Reset shop sum',
  SetShopSum = '[User] Set shop sum',
}

export const resetShopSum = createAction(UserActionTypes.ResetShopSum);

export const setShopSum = createAction(
  UserActionTypes.SetShopSum,
  (shopSum: number) => ({ shopSum })
);

export const addShopSum = createAction(
  UserActionTypes.AddShopSum,
  (addedSum: number) => ({ addedSum })
);

export const reduceShopSum = createAction(
  UserActionTypes.ReduceShopSum,
  (reducedSum: number) => ({ reducedSum })
);
