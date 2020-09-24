import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice';

const rootReducer = {
  user,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
