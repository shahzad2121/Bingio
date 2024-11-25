import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    playtv: (state, action) => {
      state = action.payload;
    },
    closetv: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { playtv, closetv } = tvSlice.actions;

export default tvSlice.reducer;
