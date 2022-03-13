import React from "react";
import { Button } from "./Button";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render the button", () => {
    const { getByText } = render(<Button>Button text</Button>);

    const button = getByText("Button text");
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });

  it("should render with a class name", () => {
    const { getByText } = render(
      <Button className="className">Button text</Button>
    );

    const button = getByText("Button text");
    expect(button).toHaveClass("className");
    expect(button).toMatchSnapshot();
  });

  it("should render with an onClick function", () => {
    const testFn = jest.fn();
    const { getByText } = render(<Button onClick={testFn}>Button text</Button>);

    const button = getByText("Button text");
    expect(testFn).toBeCalledTimes(0);
    fireEvent.click(button);
    expect(testFn).toBeCalledTimes(1);
    expect(button).toMatchSnapshot();
  });
});
