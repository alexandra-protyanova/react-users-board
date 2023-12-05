import { client } from '../api/fetchClient';
import { User } from '../types';

export const getUsers = async () => client.get<User[]>('/users');
