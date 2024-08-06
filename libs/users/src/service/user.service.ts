import { Injectable } from "@nestjs/common";
import { IUser } from "../interface";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "@nest-workspace/auth";

@Injectable()
export class UserService {
    constructor(private readonly authService: AuthService) {}

    loginUser(): { user: IUser; token: string } {
        const user = {
            name: "Sujan",
            email: "sujan@gmail.com",
            dob: new Date("19-03-1999"),
            password: "12345",
        };

        const token = this.authService.generateToken(
            JSON.stringify({ email: user.email })
        );

        return {
            user,
            token,
        };
    }

    getUser(): IUser {
        return {
            name: "Sujan",
            email: "sujan@gmail.com",
            dob: new Date("19-03-1999"),
            password: "12345",
        };
    }
}
