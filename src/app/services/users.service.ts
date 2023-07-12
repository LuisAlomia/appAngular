import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  ApiUser,
  ApiUserDetail,
} from '../components/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly baseUrl: string = 'https://reqres.in/api/users';
  private readonly httpClient: HttpClient = inject(HttpClient);

  getAllUser(): Promise<ApiUser> {
    return firstValueFrom(
      this.httpClient.get<ApiUser>(`${this.baseUrl}?page=1&per_page=12`)
    );
  }

  getUserDetail(userId: string): Promise<ApiUserDetail> {
    return firstValueFrom(
      this.httpClient.get<ApiUserDetail>(`${this.baseUrl}/${userId}`)
    );
  }
}
