import { combineReducers } from "@reduxjs/toolkit";
import applicationState from "./reducers/applicationState/applicationState";
import { marvelApi } from "./services/marvel/marvelApi";

export const rootReducer = combineReducers({
  applicationState,
  [marvelApi.reducerPath]: marvelApi.reducer,
});

export default rootReducer;
