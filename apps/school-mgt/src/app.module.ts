import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "@nest-workspace/exception";

@Module({
    imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
          },
    ]
})
export class AppModule {}
