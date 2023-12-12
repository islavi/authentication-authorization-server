import { InternalServerErrorException } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from './users.interface';
import { encryptPassword } from '../utils/encrypt';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User implements IUser {
  @Prop({ required: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1 }, { unique: true });

// Do not use arrow function for the pre save (this should be without arrow function)
UserSchema.pre<User>('updateOne', async function (next: any) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const update = (this as any).getUpdate();
    if (update['$set']?.password) {
      await encryptPassword(update['$set'].password)
        .then((hashedPassword: string) => {
          update['$set'].password = hashedPassword;
          next();
        })
        .catch((err: any) => {
          next(err);
        });
    }
    next();
  } catch (e) {
    console.log('UserSchema updateOne pre hook error', e);
    throw new InternalServerErrorException('Error occured saving the user');
  }
});

UserSchema.pre<User>('save', function (next: any) {
  const user: User = this;
  if (user && user.password) {
    encryptPassword(user.password)
      .then((hashedPassword: string) => {
        user.password = hashedPassword;
        next();
      })
      .catch((err: any) => {
        next(err);
      });
  }
  next();
});

export default UserSchema;
