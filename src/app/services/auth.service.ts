import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Promise<void> {
    const userToLogin = users.find(user => user.email === email && user.password === password);
    if (userToLogin) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  }
}


const users = [
  {
    email: 'alex@gmail.com',
    password: '1234qwer!'
  },
  {
    email: 'bob@gmail.com',
    password: '1234qwer!'
  },
  {
    email: 'john@gmail.com',
    password: '1234qwer!'
  }
]
