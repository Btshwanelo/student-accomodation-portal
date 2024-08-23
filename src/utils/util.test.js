import { getInitials } from "./index"; // Adjust the path as necessary

describe("getInitials", () => {
  test("should return initials from a full name", () => {
    expect(getInitials("John Doe")).toBe("JD");
  });

  test("should return the first letter for a single name", () => {
    expect(getInitials("Madonna")).toBe("M");
  });

  test("should return initials from multiple words", () => {
    expect(getInitials("John Fitzgerald Kennedy")).toBe("JFK");
  });

  test("should handle names with multiple spaces", () => {
    expect(getInitials("  Albert   Einstein  ")).toBe("AE");
  });

  test("should return an empty string for an empty input", () => {
    expect(getInitials("")).toBe("");
  });

  test("should handle a single initial name", () => {
    expect(getInitials("A")).toBe("A");
  });

  test("should include numbers in initials", () => {
    expect(getInitials("John 2 Doe")).toBe("J2D");
  });
});
