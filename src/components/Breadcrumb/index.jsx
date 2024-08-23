import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import homeIcon from "../../assets/home-icon.svg";
import arrowIcon from "../../assets/arrow-icon.svg";

function Breadcrumb({ items }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [items]);

  return (
    <nav className="px-2 py-3 w-full overflow-hidden" aria-label="Breadcrumb">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <ol className="flex items-center space-x-3 min-w-min">
          <li className="flex-shrink-0">
            <img
              loading="lazy"
              src={homeIcon}
              alt="Home"
              className="w-5 h-5 object-contain"
            />
          </li>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li className="flex-shrink-0">
                <img
                  loading="lazy"
                  src={arrowIcon}
                  alt="Separator"
                  className="w-4 h-4 object-contain"
                />
              </li>
              <li
                className={`self-stretch my-auto text-sm font-medium leading-none ${
                  index === items.length - 1
                    ? "text-amber-500 font-semibold"
                    : "text-slate-600"
                }`}
              >
                {item}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumb;
