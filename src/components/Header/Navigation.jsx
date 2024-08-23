import React from "react";
import PropTypes from "prop-types";

function Navigation({ navItems }) {
  return (
    <nav className="hidden md:flex flex-wrap gap-1 items-center self-stretch my-auto text-base font-semibold leading-6 whitespace-nowrap min-w-[240px] text-slate-700 max-md:max-w-full">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex overflow-hidden gap-2 items-center self-stretch px-3 py-2 my-auto ${
            item === "Dashboard" ? "text-gray-800 bg-gray-50" : "bg-white"
          } rounded-md`}
        >
          <div className="gap-3 self-stretch my-auto">{item.label}</div>
        </div>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
