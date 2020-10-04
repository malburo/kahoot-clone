/* eslint-disable no-underscore-dangle */
import kahootApi, { kahootType } from '@/api/kahootApi';
import { KahootFormValues } from '@/components/Form/KahootForm';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';

export const getKahoots = createAsyncThunk(
  'kahoot/getAll',
  async (payload, thunkAPI) => {
    try {
      const kahootList = await kahootApi.getAll();

      return kahootList.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const createKahoot = createAsyncThunk(
  'kahoot/create',
  async (payload: KahootFormValues, thunkAPI) => {
    try {
      const newKahoot = await kahootApi.createKahoot(payload);
      notification.success({
        message: newKahoot.message,
      });
      return newKahoot.data;
    } catch (error) {
      notification.error({
        message: error.data.message,
      });
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const deleteKahoot = createAsyncThunk(
  'kahoot/delete',
  async (payload: string, thunkAPI) => {
    try {
      const newKahoot = await kahootApi.deleteKahoot(payload);
      notification.success({
        message: newKahoot.message,
      });
      return newKahoot.data;
    } catch (error) {
      notification.error({
        message: error.data.message,
      });
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
interface typeInitState {
  items: kahootType[];
  isFetching: boolean;
}
const initialState: typeInitState = {
  items: [],
  isFetching: false,
};
const kahootSlice = createSlice({
  name: 'kahoot',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getKahoots.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(
      getKahoots.fulfilled,
      (state, { payload }: { payload: kahootType[] }) => {
        state.isFetching = false;
        state.items = payload;
      },
    );
    builder.addCase(getKahoots.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(createKahoot.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(
      createKahoot.fulfilled,
      (state, { payload }: { payload: kahootType }) => {
        state.isFetching = false;
        state.items.push(payload);
      },
    );
    builder.addCase(createKahoot.rejected, (state, action) => {
      state.isFetching = false;
    });

    builder.addCase(deleteKahoot.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(
      deleteKahoot.fulfilled,
      (state, { payload }: { payload: kahootType }) => {
        const index = state.items.findIndex(
          kahoot => kahoot._id === payload._id,
        );
        state.items.splice(index, 1);
        state.isFetching = false;
      },
    );
    builder.addCase(deleteKahoot.rejected, (state, action) => {
      state.isFetching = false;
    });
  },
});

const { reducer: kahootReducer } = kahootSlice;
export default kahootReducer;
