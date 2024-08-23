import React from "react";
import PropTypes from "prop-types";

function Badge({ status }) {
  const badgeClasses =
    status === "Funded" || status === "Active"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-red-50 text-red-700 border-red-200";

  return (
    <div
      className={`self-stretch px-1.5 py-0.5 my-auto ${badgeClasses} rounded-md border border-solid`}
    >
      {status}
    </div>
  );
}

Badge.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Badge;
