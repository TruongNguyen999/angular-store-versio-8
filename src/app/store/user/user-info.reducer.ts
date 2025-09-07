import { createReducer, on } from '@ngrx/store';
import { loadUserInfoSuccess } from './user-info.action';
import { UserInfo } from '../../models/user/user-info.model';

export interface UserState {
  userInfo: UserInfo | null;
}

export const initialState: UserState = {
  userInfo: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUserInfoSuccess, (state, { userInfo }) => ({
    ...state,
    userInfo,
  }))
);
