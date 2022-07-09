import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USERS_DATA } from '../../app/constants';
import { addRandomUsers } from '../../utils/add-random-users';
import { addUsersToNewCard } from '../../utils/add-users-to-new-card';

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
  currentCardIndex: 0,
};

export const cardListSlice = createSlice({
  name: 'submenu',
  initialState,
  reducers: {
    deleteCard: (state) => {
      const filteredCardList = state.cardList.filter(
        (card, index) => index !== state.currentCardIndex
      );
      return {
        ...state,
        cardList: filteredCardList,
      };
    },
    changeCurrentCardIndex: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        currentCardIndex: action.payload,
      };
    },
    addCard: (state, action: PayloadAction<CreateLocationFormOutput>) => {
      const tempCardList = state.cardList.slice();
      tempCardList.push({
        country: action.payload['location-name'] || 'Out of nowhere',
        users: addUsersToNewCard(action.payload, USERS_DATA),
      });
      return {
        ...state,
        cardList: tempCardList,
      };
    },
  },
});

export const { deleteCard, changeCurrentCardIndex, addCard } = cardListSlice.actions;
export default cardListSlice.reducer;
