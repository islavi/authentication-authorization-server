import * as bcrypt from 'bcrypt';
const saltRounds = 10;

export const encryptPassword = (text: string): Promise<string> => {
  return bcrypt.hash(text, saltRounds);
};

export const isMatchPasswords = (text: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(text, hash);
};
