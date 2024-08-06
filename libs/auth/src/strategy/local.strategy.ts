import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({ usernameField: "email" });
    }

    validate(email: string, _password: string) {
        /**
         * Sign in done
         * Extract user info
         * Attach request object
         */
        return { email };
    }
}
