import { createAction, props } from '@ngrx/store';
import { UserInfo } from '../../models/user/user-info.model';

export const loadUserInfo = createAction('[User] Load UserInfo');
export const loadUserInfoSuccess = createAction(
  '[User] Load UserInfo Success',
  props<{ userInfo: UserInfo }>()
);
export const loadUserInfoFailure = createAction(
  '[User] Load UserInfo Failure',
  props<{ error: any }>()
);
