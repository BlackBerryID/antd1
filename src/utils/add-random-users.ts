import { getRandomInt } from './get-random-int';

export const addRandomUsers = (amount: number, usersData: UsersData) => {
  const arr = [];
  const usersAmount = amount;
  for (let i = 0; i < usersAmount; i++) {
    const randomIndex = getRandomInt(0, usersData.length);
    arr.push(usersData[randomIndex]);
  }
  return arr;
};
