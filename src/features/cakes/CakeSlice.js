import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

export const CakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const [ordered, restocked] = CakeSlice.actions;
export default CakeSlice.reducer;
