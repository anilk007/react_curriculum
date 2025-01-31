import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
