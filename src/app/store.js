import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});
