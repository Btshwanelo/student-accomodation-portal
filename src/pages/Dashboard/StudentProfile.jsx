import React from "react";
import PropTypes from "prop-types";
import { getInitials } from "../../utils";

function StudentProfile({ name, email }) {
  const initials = getInitials(name);

  return (
    <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-5 items-center w-full basis-0 min-w-[320px] max-md:max-w-full">
        <div className="flex flex-col items-center justify-center self-stretch my-auto w-16 h-16 text-2xl font-semibold leading-none text-center border border-solid border-black border-opacity-10 text-gray-500 whitespace-nowrap bg-gray-100 rounded-full">
          <div className="overflow-hidden px-4 py-4 rounded-full ">
            {initials}
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <h1 className="text-3xl font-semibold leading-none text-gray-900 max-md:max-w-full">
            {name}
          </h1>
          <p className="mt-1 text-base text-slate-600 max-md:max-w-full">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}

StudentProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default StudentProfile;
