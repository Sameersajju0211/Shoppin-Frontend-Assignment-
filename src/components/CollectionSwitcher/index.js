import React from "react";

import "./index.css"

const CollectionSwitcher = ({ collections, onSwitch }) => {
  return (
    <div className="collection-switcher">
      <select onChange={(e) => onSwitch(e.target.value)}>
        {collections.map((collection) => (
          <option key={collection} value={collection} className="option-styling">
            {collection}  
          </option>
        ))}
      </select>
    </div>
  );
};

export default CollectionSwitcher;
