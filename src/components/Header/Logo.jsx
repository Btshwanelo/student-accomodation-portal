import React from "react";
import iconLogo from "../../assets/icon-logo.svg";
import textLogo from "../../assets/text-logo.svg";

function Logo() {
  return (
    <div className="flex gap-2.5 items-start self-stretch my-auto">
      <img
        loading="lazy"
        src={iconLogo}
        alt="Company logo icon"
        className="object-contain shrink-0 w-10 aspect-[0.83]"
      />
      <img
        loading="lazy"
        src={textLogo}
        alt="Company logo text"
        className="object-contain shrink-0 aspect-[2.12] w-[102px]"
      />
    </div>
  );
}

export default Logo;
