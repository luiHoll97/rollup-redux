import { configureStore } from "@reduxjs/toolkit";
import tagSlice from "./tagSlice";

export const store = configureStore({
  reducer: {
    tags: tagSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
