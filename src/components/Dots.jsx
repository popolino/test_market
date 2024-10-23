import React from "react";

const Dots = ({ number }) => {
  return (
    <div className="dots">
      {Array.from({ length: number }, (_, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default Dots;
