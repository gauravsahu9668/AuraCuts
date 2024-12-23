import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stepsState {
   step:number
}

const initial: stepsState = {
  step:1
};

const stepSlice = createSlice({
  name: "step",
  initialState:initial,
  reducers: {
    setstep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    resetstepState() {
      // Simply return the initialState to reset the state
      return initial;
    },
  },
});

export const {setstep,resetstepState } = stepSlice.actions;

export default stepSlice.reducer;