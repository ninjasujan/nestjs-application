import { Controller, Post, Injectable } from '@nestjs/common';

@Injectable()
@Controller('user')
export class UserController {
    @Post('login')
    login(): string {
        return 'Login';
    }
}
