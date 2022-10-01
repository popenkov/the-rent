import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserProps = {
  user: {
    id: number;
    login: string;
    email: string;
    pass: string;
    name?: string;
    img?: HTMLImageElement | string;
  };
  isAuth: boolean;
};

const initialUserState: UserProps = {
  user: {
    id: null,
    login: '',
    email: '',
    pass: '',
    name: '',
    img: ''
  },
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setLogin(state, action: PayloadAction<string>) {
      state.user.login = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },
    setPass(state, action: PayloadAction<string>) {
      state.user.pass = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

//export default newsSlice.reducer;
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
