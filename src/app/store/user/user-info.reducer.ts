import { createReducer, on } from '@ngrx/store';
import { loadUserInfoSuccess } from './user-info.action';
import { initialState } from '../../models/user/user-info.model';



export const userReducer = createReducer(
  initialState,
  on(loadUserInfoSuccess, (state, { userInfo }) => ({
    ...state,
    userInfo,
  }))
);
