import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import ArticleSchema, { Article } from './articles.schema';

@Module({
  controllers: [ArticlesController],
  imports: [MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])],
  providers: [ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
