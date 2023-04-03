import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
