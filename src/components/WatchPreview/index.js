import React from "react";

import "./index.css"

const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
  return (
    <div className="watch-preview">
      <p class="para-collective-data">{selectedSize ? selectedSize : "46"}mm{' '} <span>{selectedCase ? selectedCase.color : "Black"}</span> <span>{selectedCase ? selectedCase.material : "Aluminium"}</span> Case with <span>{selectedBand ? selectedBand.color : "Black"}</span> <span>{selectedBand ? selectedBand.type : "Solo loop"}</span></p>
    </div>
  );
};

export default WatchPreview;
