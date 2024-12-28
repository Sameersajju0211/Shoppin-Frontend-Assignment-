import React from "react";

import "./index.css"

const BandSelector = ({ bands, onSelect }) => {
  return (
    <div className="band-selector">
      <div className="band-carousel">
        {bands.map((band) => (
          <button
            key={band.id}
            onClick={() => onSelect(band)}
            className="band-item"
          >
            <p>{band.type}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BandSelector;
