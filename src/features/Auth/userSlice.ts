import authApi, { LoginResponse, RegisterResponse } from '@/api/authApi';
import { getKahootResponse } from '@/api/kahootApi';
import { LoginFormValues } from '@/components/Form/LoginForm';
import { RegisterFormValues } from '@/components/Form/RegisterForm';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';

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
      notification.success({
        message: response.message,
      });
      return response;
    } catch (error) {
      notification.error({
        message: error.data.message,
      });
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const register = createAsyncThunk(
  'user/register',
  async (payload: RegisterFormValues, thunkAPI) => {
    try {
      const response = await authApi.register(payload);
      notification.success({
        message: response.message,
      });
      return response;
    } catch (error) {
      notification.error({
        message: error.data.message,
      });
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    isFetching: false,
    isLogining: false,
    isRegistering: false,
    isAuth: !!localStorage.getItem('access-token'),
  },
  reducers: {
    logout: state => {
      state.isAuth = false;
      localStorage.removeItem('access-token');
    },
  },
  extraReducers: builder => {
    builder.addCase(getMe.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      getMe.fulfilled,
      (state, { payload }: { payload: getKahootResponse }) => {
        state.current = payload;
        state.isFetching = false;
      },
    );
    builder.addCase(getMe.rejected, state => {
      state.isFetching = false;
    });

    builder.addCase(login.pending, state => {
      state.isLogining = true;
    });
    builder.addCase(
      login.fulfilled,
      (state, { payload }: { payload: LoginResponse }) => {
        localStorage.setItem('access-token', payload.accessToken);
        state.isLogining = false;
        state.isAuth = true;
      },
    );
    builder.addCase(login.rejected, state => {
      state.isLogining = false;
    });

    builder.addCase(register.pending, state => {
      state.isRegistering = true;
    });
    builder.addCase(
      register.fulfilled,
      (state, { payload }: { payload: RegisterResponse }) => {
        localStorage.setItem('access-token', payload.accessToken);
        state.isRegistering = false;
        state.isAuth = true;
      },
    );
    builder.addCase(register.rejected, state => {
      state.isRegistering = false;
    });
  },
});

const { reducer: userReducer, actions } = userSlice;
export const { logout } = actions;
export default userReducer;
