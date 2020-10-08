/* eslint-disable no-underscore-dangle */
import kahootApi, { kahootType } from '@/api/kahootApi';
import questionApi, { QuestionType } from '@/api/questionApi';
import { KahootFormValues } from '@/components/Form/KahootForm';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
      return newKahoot.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const deleteKahoot = createAsyncThunk(
  'kahoot/delete',
  async (payload: string, thunkAPI) => {
    try {
      const newKahoot = await kahootApi.deleteKahoot(payload);
      return newKahoot.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const createQuestions = createAsyncThunk(
  'kahoot/createQuestions',
  async (payload: any, thunkAPI) => {
    try {
      const newQuestion = await questionApi.createQuestion(payload);
      return newQuestion.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const updateQuestions = createAsyncThunk(
  'kahoot/updateQuestions',
  async (payload: any, thunkAPI) => {
    try {
      const newQuestion = await questionApi.updateQuestion(payload);
      return newQuestion.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const deleteQuestions = createAsyncThunk(
  'kahoot/deleteQuestions',
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
    builder.addCase(getKahoots.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      getKahoots.fulfilled,
      (state, { payload }: { payload: kahootType[] }) => {
        state.isFetching = false;
        state.items = payload;
      },
    );
    builder.addCase(getKahoots.rejected, state => {
      state.isFetching = false;
    });

    builder.addCase(createKahoot.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      createKahoot.fulfilled,
      (state, { payload }: { payload: kahootType }) => {
        state.isFetching = false;
        state.items.push(payload);
      },
    );
    builder.addCase(createKahoot.rejected, state => {
      state.isFetching = false;
    });

    builder.addCase(deleteKahoot.pending, state => {
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
    builder.addCase(deleteKahoot.rejected, state => {
      state.isFetching = false;
    });

    builder.addCase(createQuestions.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      createQuestions.fulfilled,
      (state, { payload }: { payload: QuestionType[] }) => {
        state.isFetching = false;
      },
    );
    builder.addCase(createQuestions.rejected, state => {
      state.isFetching = false;
    });

    builder.addCase(updateQuestions.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(
      updateQuestions.fulfilled,
      (state, { payload }: { payload: QuestionType[] }) => {
        state.isFetching = false;
      },
    );
    builder.addCase(updateQuestions.rejected, state => {
      state.isFetching = false;

      builder.addCase(deleteQuestions.pending, state => {
        state.isFetching = true;
      });
      builder.addCase(
        deleteQuestions.fulfilled,
        (state, { payload }: { payload: QuestionType[] }) => {
          state.isFetching = false;
        },
      );
      builder.addCase(deleteQuestions.rejected, state => {
        state.isFetching = false;
      });
    });
  },
});

const { reducer: kahootReducer } = kahootSlice;
export default kahootReducer;
