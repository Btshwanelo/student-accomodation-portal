import React from "react";
import noticeIcon from "../../assets/notice-icon.svg";

function Notice() {
  return (
    <section className="flex flex-col p-4 mt-6 w-full bg-gray-50 rounded-xl border border-gray-100 border-solid max-md:max-w-full">
      <h2 className="flex flex-col items-start w-full text-2xl font-semibold leading-none text-gray-900 whitespace-nowrap max-md:max-w-full">
        Notice
      </h2>
      <div className="hidden sm:flex flex-col items-center mt-2.5 w-full text-sm leading-none bg-white rounded-lg max-md:max-w-full">
        <div className="flex overflow-hidden items-center px-8 py-3 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap flex-1 shrink gap-3 items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <img
                loading="lazy"
                src={noticeIcon}
                alt="Warning icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 rounded-full aspect-square"
              />
              <div className="flex flex-wrap flex-1 shrink gap-0.5 items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <p className="font-semibold text-slate-700">
                  Student unverified
                </p>
                <p className="text-slate-600 max-md:max-w-full">
                  Please consider accepting this student at your own risk, as
                  they may receive funding at a later date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden items-center  min-h-16 py-2 w-full max-md:max-w-full">
        <textarea
          className="  gap-2 px-3.5 py-3 text-xs bg-white min-h-12 rounded-lg border border-gray-300 border-solid shadow-sm size-full"
          placeholder="Enter a description..."
          aria-label="Description"
        />
      </div>
      <div className="hidden sm:flex flex-wrap gap-2 items-start mt-2.5 w-full max-md:max-w-full">
        <div className="flex justify-center items-center pt-0.5 w-4">
          <input
            type="checkbox"
            id="confirmUnderstanding"
            className="w-4 h-4 rounded border border-gray-300 border-solid"
          />
        </div>
        <label
          htmlFor="confirmUnderstanding"
          className="shrink text-sm font-medium leading-none  text-slate-700 max-md:max-w-full"
        >
          I confirm that I understand that accepting this student does not mean
          I may receive funds for this child
        </label>
      </div>
    </section>
  );
}

export default Notice;
