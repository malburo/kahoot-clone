import authApi from '@/api/authApi';
import { LoginFormValues } from '@/components/Form/LoginForm';
import { RegisterFormValues } from '@/components/Form/RegisterForm';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMe = createAsyncThunk(
  'user/getMe',
  async (payload, thunkAPI) => {
    try {
      const currentUser = await authApi.getMe();
      return currentUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (payload: LoginFormValues, thunkAPI) => {
    try {
      const response = await authApi.login(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const register = createAsyncThunk(
  'user/register',
  async (payload: RegisterFormValues, thunkAPI) => {
    try {
      const response = await authApi.register(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    isFetching: false,
  },
  reducers: {
    logout: () => {
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: builder => {
    builder.addCase(getMe.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.current = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(login.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      localStorage.setItem('access_token', payload.accessToken);
      state.isFetching = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(register.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      localStorage.setItem('access_token', payload.accessToken);
      state.isFetching = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isFetching = false;
    });
  },
});

const { reducer: userReducer, actions } = userSlice;
export const { logout } = actions;
export default userReducer;
