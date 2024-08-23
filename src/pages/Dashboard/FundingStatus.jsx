import React from "react";
import PropTypes from "prop-types";
import Badge from "../../components/common/Badge";

function FundingStatus({ fundingData }) {
  return (
    <section className="flex overflow-hidden flex-col flex-1 shrink font-semibold text-gray-900 rounded-lg border border-gray-300 border-solid basis-0 min-w-[240px] max-md:max-w-full">
      <h2 className="flex flex-col justify-center items-start px-3 py-4 w-full text-2xl leading-none bg-gray-50 max-md:max-w-full">
        Funding Status
      </h2>
      {/* desktop screen */}
      <div className="hidden sm:flex flex-col justify-center px-3 py-4 w-full text-sm leading-5 bg-white max-md:max-w-full">
        <div className="flex items-start w-full max-md:max-w-full">
          <div className="flex flex-1 shrink items-center px-6 py-4 w-full basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
            {fundingData.map((item, index) => (
              <p
                key={index}
                className="flex-1 shrink text-left self-stretch my-auto w-full min-w-[240px] max-md:max-w-full"
              >
                Funded:{" "}
                <span className="font-thin">
                  {item.status === "Funded" ? "Yes" : "No"}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="flex sm:hidden flex-col justify-center px-1 sm:px-3  py-4 w-full bg-white max-md:max-w-full">
        {fundingData.map((item, index) => (
          <div
            key={index}
            className="flex w-full max-md:max-w-full border-b border-gray-200"
          >
            <div className="flex flex-1 shrink items-center self-start px-1 sm:px-6 py-4 text-sm leading-none basis-0 md:min-w-[240px]  max-md:max-w-full">
              <div className="flex flex-col self-stretch my-auto">
                <div className="font-medium text-base text-left text-gray-900">
                  {item.title}
                </div>
                <div className="text-slate-600 text-sm md:text-base font-thin text-left">
                  {item.description}
                </div>
              </div>
            </div>
            <div className="flex items-center px-1 sm:px-6 py-4 h-full my-auto text-xs font-medium text-center whitespace-nowrap  ">
              <Badge status={item.status} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

FundingStatus.propTypes = {
  fundingData: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default FundingStatus;
