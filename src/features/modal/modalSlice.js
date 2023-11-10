import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
    },
    cancel: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { open, cancel } = modalSlice.actions;

export default modalSlice.reducer;
