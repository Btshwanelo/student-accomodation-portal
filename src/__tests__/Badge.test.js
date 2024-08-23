import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the matchers
import Badge from "../components/common/Badge";

describe("Badge Component", () => {
  test('renders with "Funded" status', () => {
    render(<Badge status="Funded" />);
    const badge = screen.getByText("Funded");
    expect(badge).toHaveClass(
      "bg-emerald-50 text-emerald-700 border-emerald-200"
    );
  });

  test('renders with "Not Funded" status', () => {
    render(<Badge status="Not Funded" />);
    const badge = screen.getByText("Not Funded");
    expect(badge).toHaveClass("bg-red-50 text-red-700 border-red-200");
  });
});
