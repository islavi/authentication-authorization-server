import { Injectable } from '@nestjs/common';
import { IUser } from './users.interface';

@Injectable()
export class UsersService {

  private readonly users: IUser[] = [
    {
      email: 'israel.lavi@gmail.com',
      name: 'Israel Lavi',
      password: '123456'
    },
    {
      email: 'john.smith@gmail.com',
      name: 'John Smith',
      password: '123456'
    },
  ];

  async findOne(email: string): Promise<IUser | undefined> {
    return this.users.find(user => user.email === email);
  }

  async validateUser(email: string, password: string): Promise<IUser | undefined> {
    console.log(`[UsersService] validateUser, email: ${email}, password: ${password}`)
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      console.log('[UsersService] validateUser: found user', user)
      return { ...user, password: undefined }
    }
    return undefined
  }
}
