import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {combineReducers} from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  users: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
