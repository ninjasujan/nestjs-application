import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/index';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log('[payload]', { dto });
    return this.authService.signup(dto);
  }

  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    console.log('[Payload]', { dto });
    return this.authService.signin(dto);
  }
}
