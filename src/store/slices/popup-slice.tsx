import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'submenu',
  initialState: {
    isOpen: false,
    mode: 'create',
  } as PopupSliceInitialState,
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
    changePopupMode: (state, action: PayloadAction<PopupMode>) => {
      return {
        ...state,
        mode: action.payload,
      };
    },
  },
});

export const { openPopup, closePopup, changePopupMode } = popupSlice.actions;
export default popupSlice.reducer;
