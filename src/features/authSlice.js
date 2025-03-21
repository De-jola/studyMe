import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userExists: null,
    display: false,
  },
};

export const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    checkUserExists: (state, action) => {
      state.value.userExists = action.payload;
    },
    display: (state) => {
      state.value.display = !state.value.display;
    },
  },
});

export const { checkUserExists, display } = userAuth.actions;
export default userAuth.reducer;
