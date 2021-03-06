import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { IUserState, userInitialState } from '../state/user.state';
import {
  addShopSum,
  reduceShopSum,
  resetShopSum,
  setShopSum,
} from '../actions/user.actions';

export const USER_FEATURE = 'user';

export const userReducer = createReducer<IUserState>(
  userInitialState,
  on(addShopSum, (state, { addedSum }) => ({
    ...state,
    shopSum: {
      ...state.shopSum,
      value: state.shopSum.value + addedSum,
    },
  })),
  on(reduceShopSum, (state, { reducedSum }) => ({
    ...state,
    shopSum: {
      ...state.shopSum,
      value: state.shopSum.value + reducedSum,
    },
  })),
  on(resetShopSum, () => userInitialState),
  on(setShopSum, (state, { shopSum }) => ({
    ...state,
    shopSum: {
      ...state.shopSum,
      value: shopSum,
    },
  }))
);

export const userFeatureSelector =
  createFeatureSelector<IUserState>(USER_FEATURE);
