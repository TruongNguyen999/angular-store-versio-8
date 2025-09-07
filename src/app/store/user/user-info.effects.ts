import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../core/services/user.services';
import { loadUserInfo, loadUserInfoSuccess, loadUserInfoFailure } from './user-info.action';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserInfo),
      mergeMap(() =>
        this.userService.getUserInfo().pipe(
          map((userInfo) => {
            console.log('🟢 Fetched user info:', userInfo);
            return loadUserInfoSuccess({ userInfo });
          }),
          catchError((error) => of(loadUserInfoFailure({ error })))
        )
      )
    )
  );
}
