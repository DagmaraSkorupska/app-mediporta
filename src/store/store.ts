import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer.ts";
import localStorageMiddleware from "./middleware";

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
