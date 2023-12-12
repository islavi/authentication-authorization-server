import { Injectable } from '@nestjs/common';
import { IUser } from './users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async validateUser(email: string, password: string): Promise<IUser | undefined> {
    console.log(`[UsersService] validateUser, email: ${email}, password: ${password}`);
    const user: IUser = await this.userModel.findOne({ email, password }, { password: 0, _id: 0 }).lean();
    if (user) {
      console.log('[UsersService] validateUser: found user', user);
      return { ...user };
    }
    return undefined;
  }
}
