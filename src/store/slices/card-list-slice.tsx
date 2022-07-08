import { createSlice } from '@reduxjs/toolkit';
import { USERS_DATA } from '../../app/constants';
import { addRandomUsers } from '../../utils/add-random-users';

const initialState = {
  cardList: [
    {
      country: 'Australia',
      users: [
        USERS_DATA[0],
        USERS_DATA[1],
        USERS_DATA[2],
        USERS_DATA[0],
        USERS_DATA[3],
        USERS_DATA[4],
        USERS_DATA[2],
        USERS_DATA[5],
        USERS_DATA[6],
        ...addRandomUsers(4, USERS_DATA),
      ],
    },
    {
      country: 'Belarus',
      users: [USERS_DATA[0], USERS_DATA[1], USERS_DATA[2], USERS_DATA[0], USERS_DATA[4]],
    },
    {
      country: 'USA',
      users: [
        USERS_DATA[0],
        USERS_DATA[1],
        USERS_DATA[2],
        USERS_DATA[0],
        USERS_DATA[3],
        USERS_DATA[4],
        USERS_DATA[7],
        USERS_DATA[6],
        USERS_DATA[8],
        ...addRandomUsers(73, USERS_DATA),
      ],
    },
    {
      country: 'Canada',
      users: [USERS_DATA[1], USERS_DATA[3]],
    },
  ] as CardData[],
};

export const cardListSlice = createSlice({
  name: 'submenu',
  initialState,
  reducers: {},
});

// export const {} = cardListSlice.actions;
export default cardListSlice.reducer;
