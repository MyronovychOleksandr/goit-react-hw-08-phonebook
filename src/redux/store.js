import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";
import authReducer from "./auth/authReducers";
import phBookReducer from "./contacts/phonebookReducers";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  phonebook: phBookReducer,
});

export const store = configureStore({
  // reducer: {
  //   auth: persistReducer(authPersistConfig, authReducer),
  //   phonebook: phBookReducer,
  // },
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
