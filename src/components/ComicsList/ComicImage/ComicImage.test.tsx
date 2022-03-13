import React from "react";
import { ComicImage } from "./ComicImage";
import { render, screen } from "@testing-library/react";

describe("ComicImage", () => {
  it("should render the image", async () => {
    const mockComic = {
      thumbnail: {
        path: "http://testurl.com/test-image",
        extension: "jpg",
      },
      variation: "large-image",
      title: "test-image",
    };

    const comicImage = await render(
      <ComicImage
        title={mockComic.title}
        variation={mockComic.variation}
        thumbnail={mockComic.thumbnail}
      />
    );

    const { src } = screen.getByTestId<HTMLImageElement>("comic-image");
    expect(src).toContain("http://testurl.com/test-image/large-image.jpg");
    expect(comicImage).toMatchSnapshot();
  });
});
