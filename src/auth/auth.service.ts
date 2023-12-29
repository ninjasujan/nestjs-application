import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'Hello signup.!' };
  }

  signin() {
    return { message: 'Hello signin.!' };
  }
}
