import user from '@/features/Auth/userSlice';
import kahoot from '@/features/Kahoot/slice/kahoot';
import { kahoots } from '@/features/Kahoot/slice/kahoots';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  user,
  kahoot,
  kahoots,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
