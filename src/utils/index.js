/**
 * Generates initials from a full name.
 *
 * @param {string} name - The full name from which to generate initials.
 * @returns {string} The initials derived from the name.
 */
export const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};
