import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerSuccess]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginSuccess]: () => null,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.clearError]: () => null,
});

export default combineReducers({
  user,
  token,
  error,
});
