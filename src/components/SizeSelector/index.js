import React from "react";

import "./index.css"

const SizeSelector = ({ sizes, onSelect }) => {
  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <button key={size} onClick={() => onSelect(size)}>
          {size}mm
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;


