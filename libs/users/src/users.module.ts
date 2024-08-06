import { Module } from "@nestjs/common";
import { UserService } from "./service";
import { AuthLibModule } from "@nest-workspace/auth";

@Module({
    imports: [AuthLibModule],
    providers: [UserService],
    exports: [UserService],
})
export class UserLibModule {}
