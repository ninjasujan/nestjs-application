import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
    ],
})
export class AppModule {}
