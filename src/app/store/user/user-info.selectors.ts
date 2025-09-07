import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from 'src/app/models/user/user-info.model';

export const selectUserState = createFeatureSelector<UserState>('userInfo');

export const selectUserInfo = createSelector(
  selectUserState,
  (state) => state.userInfo
);

export const selectUserPermission = createSelector(
  selectUserInfo,
  (user) => user && user.permission
);
