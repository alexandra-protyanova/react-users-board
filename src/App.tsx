import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { UserList } from './components/UserList';
import { AddUserForm } from './components/AddUserForm';
import { AppContainer } from './components/AppContainer';
import { Color, User, UserWithColor } from './types';
import { prepareUsers } from './helpers';
import { getUsers } from './services/user.service';
import { getColors } from './services/color.service';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  const preparedUsers = prepareUsers(users, colors);

  useEffect(() => {
    getUsers()
      .then(setUsers);

    getColors()
      .then(setColors);
  }, []);

  const addUser = useCallback((name: string, carColorId: number) => {
    const color = colors.find(c => c.id === carColorId);
    const newUser: UserWithColor = {
      id: Math.random(),
      carColorId,
      name,
      carColor: color,
    };

    setUsers((prev) => [...prev, newUser]);
  }, []);

  return (
    <AppContainer>
      <UserList users={preparedUsers} />

      <AddUserForm colors={colors} addUser={addUser} />
    </AppContainer>
  );
};
