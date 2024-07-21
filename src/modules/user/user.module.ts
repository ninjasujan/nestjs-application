import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { LoggerMiddleware } from '../../middleware/auth.middleware';

@Module({
    controllers: [UserController],
})
export class UserModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('user');
    }
}
