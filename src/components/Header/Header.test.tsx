import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";
import { renderWithRedux } from "../../utils/testUtils";
import { store } from "../../redux/store";
import "@testing-library/jest-dom";
import { createStore } from "@reduxjs/toolkit";
import { debug } from "console";

describe("Header", () => {
  it("should render the header", () => {
    const { getByText, getByRole } = renderWithRedux(<Header />, store);

    const header = getByRole("banner");
    const headerText = getByText("Red Ant Comics");
    expect(header).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
    expect(header).toMatchSnapshot();
  });

  it("should change the favouritePanelActive state on button click", () => {
    const { getByRole } = renderWithRedux(<Header />, store);

    const favouriteButton = getByRole("button");
    expect(favouriteButton).toHaveClass("favourites-toggle");

    let { favouritesPanelOpen } = store.getState().applicationState;
    expect(favouritesPanelOpen).toBeFalsy();

    fireEvent.click(favouriteButton);

    favouritesPanelOpen = store.getState().applicationState.favouritesPanelOpen;

    expect(favouritesPanelOpen).toBeTruthy();
  });
});
