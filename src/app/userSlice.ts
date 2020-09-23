import authApi from '@/api/authApi';
import { LoginFormValues } from '@/components/Form/LoginForm';
import { RegisterFormValues } from '@/components/Form/RegisterForm';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMe = createAsyncThunk('user/getMe', async payload => {
  const currentUser = await authApi.getMe();
  return currentUser;
});

export const login = createAsyncThunk(
  'user/login',
  async (payload: LoginFormValues, thunkAPI) => {
    const response = await authApi.login(payload);
    // Save access token to local storage
    const { accessToken } = response;
    localStorage.setItem('access_token', accessToken);
  }
);
export const register = createAsyncThunk(
  'user/register',
  async (payload: RegisterFormValues, thunkAPI) => {
    const response = await authApi.register(payload);
    // Save access token to local storage
    const { accessToken } = response;
    localStorage.setItem('access_token', accessToken);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {
    logout: (state, action) => {
      state.current = {};
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: builder => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.current = action.payload || {};
    })

    builder.addCase(getMe.rejected, (state, action) => {
      state.current = {};
    })
  }
});

const { reducer: userReducer, actions } = userSlice;
export const { logout } = actions;
export default userReducer;