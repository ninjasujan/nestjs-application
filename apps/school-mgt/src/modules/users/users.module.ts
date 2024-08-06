import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserLibModule } from "@lib/users";
import { AuthLibModule } from "@nest-workspace/auth";

@Module({
    imports: [AuthLibModule, UserLibModule],
    controllers: [UsersController],
})
export class UsersModule {}
