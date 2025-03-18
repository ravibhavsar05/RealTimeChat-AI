import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SetAppAccountStatus} from './types';
import {AppState} from '@xyz/enum';

export const initialState: AppState = {
  accountStatus: null,
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppAccountStatus: (
      state,
      action: PayloadAction<SetAppAccountStatus>,
    ) => {
      const accountStatus = action?.payload;
      return Object.assign({}, state, {
        accountStatus,
      });
    },
  },
});

export const {setAppAccountStatus} = app.actions;

export default app.reducer;


