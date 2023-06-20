import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./text"

export default configureStore({
  reducer: {
    text: textReducer
  }
});
