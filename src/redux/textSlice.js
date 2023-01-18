import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: { value: "" },
  reducers: {
    setSearchText(state, action) {
      state.value = action.payload;
    },
    clearSearchText(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSearchText, clearSearchText } = textSlice.actions;

export default textSlice.reducer;
