import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cakeReducer from "../features/cakes/CakeSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    counter: counterReducer,
  },
});
