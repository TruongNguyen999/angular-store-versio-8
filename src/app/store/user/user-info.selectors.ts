import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user-info.reducer';

export const selectUserState = createFeatureSelector<UserState>('userInfo');

export const selectUserInfo = createSelector(
  selectUserState,
  (state) => state.userInfo
);

export const selectUserPermission = createSelector(
  selectUserInfo,
  (user) => user && user.permission
);
