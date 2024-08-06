import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strategy/local.strategy";
import { LocalAuthGuard } from "./guard/local.guard";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthService } from "./service/auth.service";
import { JwtAuthGuard } from "./guard";
import { JwtStrategy } from "./strategy";

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.getOrThrow<string>("JWT_SECRET"),
            }),
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        LocalAuthGuard,
        JwtAuthGuard,
        JwtStrategy,
    ],
    exports: [LocalAuthGuard, AuthService, JwtAuthGuard],
})
export class AuthLibModule {}
