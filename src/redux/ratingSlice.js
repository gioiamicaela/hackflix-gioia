import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "rating",
  initialState: 0,
  reducers: {
    setRating(state, action) {
      state = action.payload;
    },
    clearRating(state, action) {
      state = action.payload;
    },
  },
});

export const { setRating, clearRating } = ratingSlice.actions;

export default ratingSlice.reducer;
