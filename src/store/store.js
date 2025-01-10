import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./roomSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    room: roomReducer,
    product: productReducer,
  },
});

export default store;
