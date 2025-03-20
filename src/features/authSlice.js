import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userExists: null,
  },
};

export const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    checkUserExists: (state, action) => {
      state.value.userExists = action.payload;
    },
  },
});

export const { checkUserExists } = userAuth.actions;
export default userAuth.reducer;
