import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
