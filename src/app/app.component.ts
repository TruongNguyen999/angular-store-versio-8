import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUserInfo } from './store/user/user-info.action';
import { AppState } from './models/user/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.store.dispatch(loadUserInfo());
  }
}