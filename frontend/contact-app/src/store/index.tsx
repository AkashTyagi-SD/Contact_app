import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: import.meta.env.DEV, // 🔥 Redux DevTools enabled
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
