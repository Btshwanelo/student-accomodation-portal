import React from "react";
import ActionButton from "../../components/common/ActionButton";

function Actions() {
  return (
    <section className="flex flex-col p-4 mt-6 w-full font-semibold bg-gray-50 rounded-xl border border-gray-100 border-solid max-md:max-w-full">
      <h2 className="flex flex-col items-start w-full text-2xl leading-none text-gray-900 whitespace-nowrap max-md:max-w-full">
        Actions
      </h2>
      <div className="flex  gap-2.5 items-start self-center mt-2.5 max-w-screen-sm text-sm leading-none text-white w-[640px] max-md:max-w-full">
        <ActionButton>Invite</ActionButton>
        <ActionButton>Accept at risk</ActionButton>
      </div>
    </section>
  );
}

export default Actions;
