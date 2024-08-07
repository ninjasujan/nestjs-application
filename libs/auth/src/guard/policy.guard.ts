import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLE_KEY } from "../decorator";

@Injectable()
export class PolicyGuard implements CanActivate {

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const role = this.reflector.get(ROLE_KEY, context.getHandler());
        if(role && role === "USER") {
            return true;
        }
        return false;
    }
}
