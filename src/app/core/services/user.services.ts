import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInfo } from '../../models/user/user-info.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://db-react-native.onrender.com/userInfo'; // thay bằng API thật

  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.apiUrl).pipe(
      map((res) => {
        console.log('🟢 API response:', res);
        return res;
      })
    );
  }
}
