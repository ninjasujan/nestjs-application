import { Module } from "@nestjs/common";
import { HttpExceptionFilter } from "./service/exception.filter";

@Module({
    providers: [HttpExceptionFilter],
    exports: [HttpExceptionFilter],
})
export class ExceptionModule {}
