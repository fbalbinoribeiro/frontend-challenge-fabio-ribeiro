import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user: User;

  constructor() {}

  public async setUser(email: string): Promise<void> {
    this.user = new User();
    this.user.email = email;
  }

  public getUser(): User {
    return this.user;
  }
}
