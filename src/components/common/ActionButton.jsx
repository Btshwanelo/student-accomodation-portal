import React from "react";
import PropTypes from "prop-types";

function ActionButton({ children }) {
  return (
    <button className="flex overflow-hidden flex-1 shrink gap-1 justify-center items-center px-3.5 py-2.5 whitespace-nowrap bg-amber-500 rounded-lg shadow-sm basis-0 min-w-[140px] text-white">
      <span className="self-stretch px-0.5 my-auto">{children}</span>
    </button>
  );
}

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActionButton;
