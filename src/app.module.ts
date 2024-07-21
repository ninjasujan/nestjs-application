import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { BookmarkModule } from './modules/bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, BookmarkModule],
})
export class AppModule {}
