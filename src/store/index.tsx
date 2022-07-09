import { configureStore } from '@reduxjs/toolkit';
import submenuSlice from './slices/submenu-slice';
import cardListSlice from './slices/card-list-slice';
import popupSlice from './slices/popup-slice';

export const store = configureStore({
  reducer: {
    submenu: submenuSlice,
    cardList: cardListSlice,
    popup: popupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
