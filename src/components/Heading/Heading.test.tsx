import React from "react";
import { Heading } from "./Heading";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Heading", () => {
  it("should render heading with text", () => {
    const exampleText = "Example text";
    const { getByText } = render(<Heading>{exampleText}</Heading>);

    const heading = getByText(exampleText);
    expect(heading).toBeInTheDocument();
    expect(heading).toMatchSnapshot();
  });

  it("should render heading with class name", () => {
    const exampleClass = "exampleclass";
    const { getByText } = render(
      <Heading className={exampleClass}>My heading</Heading>
    );

    const heading = getByText("My heading");
    expect(heading).toHaveClass(exampleClass);
    expect(heading).toMatchSnapshot();
  });

  const headingTypes = ["h1", "h2"];

  for (const headingType of headingTypes) {
    it(`should render ${headingType} variation`, () => {
      const { container } = render(
        <Heading variation={headingType}>My heading</Heading>
      );
      const heading = container.querySelector(headingType);
      expect(heading).toHaveTextContent("My heading");
      expect(heading).toMatchSnapshot();
    });
  }

  it(`should render paragraph when no variation passed`, () => {
    const { container } = render(<Heading>My heading</Heading>);
    const heading = container.querySelector("p");
    expect(heading).toHaveTextContent("My heading");
    expect(heading).toMatchSnapshot();
  });
});
