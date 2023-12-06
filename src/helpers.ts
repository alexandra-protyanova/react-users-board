import { Color, User, UserWithColor } from './types';

export const prepareUsers = (users: User[], colors: Color[]): UserWithColor[] => (
  users.map(user => ({
    ...user,
    carColor: colors.find(color => color.id === user.carColorId),
  }))
);
