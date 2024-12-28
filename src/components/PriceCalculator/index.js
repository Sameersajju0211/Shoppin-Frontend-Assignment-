import React from "react";

import "./index.css"

const PriceCalculator = ({ selectedCase, selectedBand, selectedSize }) => {
  const totalPrice = 
    (selectedCase?.price || 0) + (selectedBand?.price || 0);

  return (
    <div className="price-calculator">
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default PriceCalculator;
