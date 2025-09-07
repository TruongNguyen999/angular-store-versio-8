import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { AppState } from 'src/app/models/user/app.state';
import { Permission } from 'src/app/models/user/user-info.model';
import { selectUserPermission } from 'src/app/store/user/user-info.selectors';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
  role$: Observable<Permission>;

  constructor(private store: Store<AppState>) {
    this.role$ = this.store
      .select(selectUserPermission)
      .pipe(
        filter((permission): permission is Permission => !!permission),
        tap((role) => console.log('🟢 Role từ store:', role))
    );
  }
}
