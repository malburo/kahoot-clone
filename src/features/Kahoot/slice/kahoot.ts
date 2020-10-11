/* eslint-disable no-underscore-dangle */
import kahootApi, { kahootType } from '@/api/kahootApi';
import questionApi, { QuestionType } from '@/api/questionApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getKahoot = createAsyncThunk(
  'kahoot/get',
  async (payload: string, thunkAPI) => {
    try {
      const kahootList = await kahootApi.getById(payload);
      return kahootList.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const createQuestion = createAsyncThunk(
  'questions/create',
  async (payload: any, thunkAPI) => {
    try {
      const newQuestion = await questionApi.createQuestion(payload);
      return newQuestion.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const updateQuestion = createAsyncThunk(
  'questions/update',
  async (payload: any, thunkAPI) => {
    try {
      const newQuestion = await questionApi.updateQuestion(payload);
      return newQuestion.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const deleteQuestion = createAsyncThunk(
  'questions/delete',
  async (payload: any, thunkAPI) => {
    try {
      const newQuestion = await questionApi.deleteQuestion(payload);
      return newQuestion.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
interface typeInitState {
  item: kahootType;
  isFetching: boolean;
}
const initialState: typeInitState = {
  item: {
    _id: '',
    questions: [],
    title: '',
  },
  isFetching: false,
};
const kahootSlice = createSlice({
  name: 'kahoot',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getKahoot.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      getKahoot.fulfilled,
      (state, { payload }: { payload: kahootType }) => {
        state.item = payload;
        state.isFetching = false;
      },
    );
    builder.addCase(getKahoot.rejected, state => {
      state.isFetching = false;
    });

    builder.addCase(createQuestion.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      createQuestion.fulfilled,
      (state, { payload }: { payload: QuestionType }) => {
        state.item.questions.push(payload);
        state.isFetching = false;
      },
    );
    builder.addCase(createQuestion.rejected, state => {
      state.isFetching = false;
    });

    builder.addCase(updateQuestion.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      updateQuestion.fulfilled,
      (state, { payload }: { payload: QuestionType }) => {
        const index = state.item.questions.findIndex(
          question => question._id === payload._id,
        );
        state.item.questions[index] = payload;
        state.isFetching = false;
      },
    );
    builder.addCase(updateQuestion.rejected, state => {
      state.isFetching = false;
    });
    builder.addCase(deleteQuestion.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      deleteQuestion.fulfilled,
      (state, { payload }: { payload: QuestionType }): any => {
        state.isFetching = false;
        state.item.questions = state.item.questions.filter(
          question => question._id !== payload._id,
        );
      },
    );
    builder.addCase(deleteQuestion.rejected, state => {
      state.isFetching = false;
    });
  },
});

const { reducer: kahootReducer } = kahootSlice;
export default kahootReducer;
