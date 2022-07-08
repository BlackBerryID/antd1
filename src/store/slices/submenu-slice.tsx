import { createSlice } from '@reduxjs/toolkit';
import { OPEN_STATE_WIDTH, CLOSE_STATE_WIDTH } from '../../app/constants';

export const submenuSlice = createSlice({
  name: 'submenu',
  initialState: {
    active: true,
    submenuWidth: OPEN_STATE_WIDTH,
  },
  reducers: {
    toggleSubmenuState: (state) => {
      return {
        ...state,
        active: !state.active,
      };
    },
    toggleSubmenuWidth: (state) => {
      return {
        ...state,
        submenuWidth:
          state.submenuWidth === OPEN_STATE_WIDTH ? CLOSE_STATE_WIDTH : OPEN_STATE_WIDTH,
      };
    },
  },
});

export const { toggleSubmenuState, toggleSubmenuWidth } = submenuSlice.actions;
export default submenuSlice.reducer;
