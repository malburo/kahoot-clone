import user from '@/features/Auth/userSlice';
import kahoot from '@/features/Kahoot/kahootSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  user,
  kahoot,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
