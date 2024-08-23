/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";
import burgerIcon from "../../assets/burger-icon.svg";
import IconButton from "../common/IconButton";

function DropdownMenu({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton handleOnclick={toggleNavbar} icon={burgerIcon} />
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute z-10 right-6 top-12`}
      >
        <div className="mt-2 bg-white border border-gray-200 text-left shadow-lg rounded-md w-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleNavbar}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

DropdownMenu.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownMenu;
