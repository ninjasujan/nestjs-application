import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signup(dto: AuthDto) {
    const { email, password } = dto;
    return { message: 'Hello signup.!', email, password };
  }

  signin(dto: AuthDto) {
    const { email, password } = dto;
    return { message: 'Hello signup.!', email, password };
  }
}
