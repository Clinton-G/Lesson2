import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exerciseLogs: [],
};

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exerciseLogs.push(action.payload);
    },
    deleteExercise: (state, action) => {
      state.exerciseLogs = state.exerciseLogs.filter(
        (exercise) => exercise.id !== action.payload
      );
    },
  },
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
