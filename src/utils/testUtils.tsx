import React from "react";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export const renderWithRedux = (
  ui: JSX.Element,
  store = createStore(() => ({}))
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});
