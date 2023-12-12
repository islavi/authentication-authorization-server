import { Injectable } from '@nestjs/common';
import { IArticle } from './articles.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './articles.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private readonly articleModel: Model<ArticleDocument>) {}

  async findByOwnerEmail(ownerEmail: string): Promise<IArticle[] | undefined> {
    return this.articleModel.find({ owner: ownerEmail });
  }

  async findAll(): Promise<IArticle[]> {
    return this.articleModel.find({});
  }
}
