import React from "react";
import PropTypes from "prop-types";
import Badge from "../../components/common/Badge";

function LeaseDetails({ leases }) {
  return (
    <section className="flex overflow-hidden flex-col flex-1 shrink rounded-lg border border-gray-300 border-solid basis-0 min-w-[240px] max-md:max-w-full">
      <h2 className="flex flex-col justify-start items-start px-3 py-4 w-full text-2xl font-semibold leading-none text-gray-900 bg-gray-50 max-md:max-w-full">
        Lease Details
      </h2>
      <div className="flex flex-col justify-center px-1 sm:px-3  py-4 w-full bg-white max-md:max-w-full">
        {leases.map((lease, index) => (
          <div
            key={index}
            className="flex w-full max-md:max-w-full border-b border-gray-200"
          >
            <div className="flex flex-1 shrink items-center self-start px-1 sm:px-6 py-4 text-sm leading-none basis-0 md:min-w-[240px]  max-md:max-w-full">
              <div className="flex flex-col self-stretch my-auto">
                <div className="font-medium text-xs md:text-base text-left text-gray-900">
                  {lease.company}
                </div>
                <div className="text-slate-600 text-xs md:text-base text-left">
                  {lease.period}
                </div>
              </div>
            </div>
            <div className="flex items-center px-1 sm:px-6 py-4 h-full text-xs font-medium text-center whitespace-nowrap  ">
              <Badge status={lease.status} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

LeaseDetails.propTypes = {
  leases: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LeaseDetails;
