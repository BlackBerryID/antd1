import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'submenu',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openPopup: (state) => {
      return {
        ...state,
        isOpen: true,
      };
    },
    closePopup: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
