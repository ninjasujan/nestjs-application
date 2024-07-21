import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(_request: Request, _response: Response, next: NextFunction) {
        console.log('[Request Logged]');
        next();
    }
}
