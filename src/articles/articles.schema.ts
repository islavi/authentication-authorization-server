import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IArticle } from './articles.interface';

export type ArticleDocument = Article & Document;

@Schema({ timestamps: true })
export class Article implements IArticle {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  ownerName: string;
}

const ArticleSchema = SchemaFactory.createForClass(Article);

export default ArticleSchema;
