import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    const { email, password } = dto;
    const hash = await argon.hash(password);
    const user = await this.prisma.user.create({
      data: {
        email: email,
        hash: hash,
      },
    });
    return { message: 'Hello signup.!', user };
  }

  signin(dto: AuthDto) {
    const { email, password } = dto;
    return { message: 'Hello signup.!', email, password };
  }
}
