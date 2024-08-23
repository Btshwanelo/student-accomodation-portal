import React from "react";
import PropTypes from "prop-types";
import userProfile from "../../assets/user-profile.png";

function UserActions({ actionIcons }) {
  return (
    <div className="hidden md:flex gap-4 items-center self-stretch my-auto">
      <div className="flex gap-1 items-start self-stretch my-auto">
        {actionIcons.map((icon, index) => (
          <button
            key={index}
            className="flex overflow-hidden justify-center items-center p-2 w-10 bg-white rounded-md"
          >
            <img
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="object-contain self-stretch my-auto w-5 aspect-square"
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col self-stretch my-auto w-10">
        <div className="flex overflow-hidden relative flex-col justify-center w-10 rounded-full aspect-square">
          <img
            loading="lazy"
            src={userProfile}
            alt="User avatar"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative shrink-0 h-10 rounded-full border border-solid border-black border-opacity-10" />
        </div>
      </div>
    </div>
  );
}

UserActions.propTypes = {
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserActions;
