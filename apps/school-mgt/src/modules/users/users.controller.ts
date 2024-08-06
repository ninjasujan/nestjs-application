import { UserService } from "@lib/users";
import { JwtAuthGuard, LocalAuthGuard, Policy } from "@nest-workspace/auth";
import { Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
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

    @UseGuards(JwtAuthGuard)
    @Policy("USER")
    @Get("/user/:id")
    getUser(@Req() request: Request, @Res() response: Response) {
        const id = request.params.id;
        response.status(200).json({
            user: {
                name: "Sujan",
                id: id,
            },
        });
    }
}
