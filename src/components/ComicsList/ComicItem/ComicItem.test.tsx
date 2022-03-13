import React from "react";
import { ComicItem } from "./ComicItem";
import "@testing-library/jest-dom";
import { renderWithRedux } from "../../../utils/testUtils";
import { store } from "../../../redux/store";
import { createStore } from "@reduxjs/toolkit";
import { fireEvent } from "@testing-library/react";

const testComic = {
  title: "TestComic",
  id: "1234",
  thumbnail: {
    path: "pathToThumbnail",
    extension: "jpg",
  },
};

describe("ComicItem", () => {
  it("should render the ComicItem component", () => {
    const { getByTestId } = renderWithRedux(
      <ComicItem comic={testComic} />,
      store
    );
    const comicItem = getByTestId("comic-item");
    expect(comicItem).toBeInTheDocument();
    expect(comicItem).toMatchSnapshot();
  });

  it("should show 'Add to Favourites' button when id not in favourites array", () => {
    const { getByText } = renderWithRedux(
      <ComicItem comic={testComic} />,
      store
    );
    let comicItemButton = getByText("Add to favourites");
    expect(comicItemButton).toBeInTheDocument();
    expect(comicItemButton).toMatchSnapshot();

    fireEvent.click(comicItemButton);

    comicItemButton = getByText("Remove from favourites");
    expect(comicItemButton).toBeInTheDocument();
    expect(comicItemButton).toMatchSnapshot();
  });

  it("should show 'Remove from Favourites' button when id not in favourites array", () => {
    const { getByText } = renderWithRedux(
      <ComicItem comic={testComic} />,
      store
    );

    let comicItemButton = getByText("Remove from favourites");
    expect(comicItemButton).toBeInTheDocument();
    expect(comicItemButton).toMatchSnapshot();

    fireEvent.click(comicItemButton);

    comicItemButton = getByText("Add to favourites");
    expect(comicItemButton).toBeInTheDocument();
    expect(comicItemButton).toMatchSnapshot();
  });
});
