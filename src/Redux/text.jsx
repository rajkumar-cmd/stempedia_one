import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    text: ""
  },
  reducers: {
    modifyText: (state, action) => {
      state.text = action.payload;
    }
  }
});

export const { modifyText } = textSlice.actions;

export default textSlice.reducer;
