import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://myuser:mypassword@127.0.0.1:27017/sample?authSource=admin'), AuthModule, UsersModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
