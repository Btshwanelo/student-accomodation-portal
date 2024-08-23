import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IconButton from "../components/common/IconButton"; // Adjust the path as necessary
import "@testing-library/jest-dom/extend-expect";

describe("IconButton Component", () => {
  const mockHandleOnclick = jest.fn();
  const iconUrl = "path/to/icon.png";

  test("renders with provided icon", () => {
    render(<IconButton icon={iconUrl} handleOnclick={mockHandleOnclick} />);
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", iconUrl);
  });

  test("clicking the button triggers handleOnclick", () => {
    render(<IconButton icon={iconUrl} handleOnclick={mockHandleOnclick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockHandleOnclick).toHaveBeenCalledTimes(1);
  });

  test("throws prop type error with incorrect props", () => {
    // No direct way to check prop types in test cases; check console for errors.
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<IconButton icon={123} handleOnclick="notAFunction" />);
    expect(console.error).toHaveBeenCalled();
    spy.mockRestore();
  });
});
