import { UserService } from "@lib/users";
import { JwtAuthGuard, LocalAuthGuard, Role, PolicyGuard } from "@nest-workspace/auth";
import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Req,
    Res,
    UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";

@Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(LocalAuthGuard)
    @Post("/auth/login")
    userLogin(@Req() request: Request, @Res() response: Response) {
        const user = this.userService.loginUser();
        response.status(200).json(user);
    }

    @UseGuards(JwtAuthGuard, PolicyGuard)
    @Role("ADMIN")
    @Get("/user/:id")
    getUser(
        @Req() request: Request,
        @Param("id", ParseIntPipe) id: number,
        @Res() response: Response
    ) {
        const user = this.userService.getUser(id);
        response.status(200).json(user);
    }
}
