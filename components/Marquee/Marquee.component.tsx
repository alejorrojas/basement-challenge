import React from "react";

const Marquee = () => {
  return (
    <>
      <hr className="h-px  bg-white border-1 " />
      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="xl:py-8 md:py-6 xs:py-2 animate-marquee inline-block">
          <span className="xl:text-4xl md:text-2xl xs:text-xl mx-4">
            A man can’t have enough basement swag  —  A man can’t have enough
            basement swag  —
          </span>
          <span className="xl:text-4xl md:text-2xl xs:text-xl mx-4">
            A man can’t have enough basement swag  —  A man can’t have enough
            basement swag  —
          </span>
        </div>
        <div className="xl:py-8 md:py-6 xs:py-2 animate-marquee inline-block">
          <span className="xl:text-4xl md:text-2xl xs:text-xl mx-4">
            A man can’t have enough basement swag  —  A man can’t have enough
            basement swag  —
          </span>
          <span className="xl:text-4xl md:text-2xl xs:text-xl mx-4">
            A man can’t have enough basement swag  —  A man can’t have enough
            basement swag  —
          </span>
        </div>
      </div>
      <hr className="h-px bg-white border-1" />
    </>
  );
};

export default Marquee;
