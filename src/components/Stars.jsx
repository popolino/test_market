import React from "react";
import SvgSelector from "./SvgSelector";

const Stars = () => {
  return (
    <div className="stars">
      <div>
        <SvgSelector id="star" className="star-fill" />
        <SvgSelector id="star" className="star-fill" />
        <SvgSelector id="star" className="star-fill" />
        <SvgSelector id="star" className="star-none" />
        <SvgSelector id="star" className="star-none" />
      </div>
      <p>123</p>
    </div>
  );
};

export default Stars;
