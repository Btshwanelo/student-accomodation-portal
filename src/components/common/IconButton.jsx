import React from "react";
import PropTypes from "prop-types";

function IconButton({ icon, handleOnclick }) {
  return (
    <button
      onClick={handleOnclick}
      className="md:hidden flex overflow-hidden justify-center items-center self-stretch px-2 my-auto w-10 h-10 bg-white rounded-lg"
      aria-label="Menu"
    >
      <img loading="lazy" src={icon} className="w-6 object-contain" alt="" />
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  handleOnclick: PropTypes.func.isRequired,
};

export default IconButton;
