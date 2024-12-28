import React from "react";

import "./index.css"

const CaseSelector = ({ cases, onSelect }) => {
  return (
    <div className="case-selector">
      <div className="case-grid">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            onClick={() => onSelect(caseItem)}
            className="case-item"
          >
            <button type="button" className="button-styling">{caseItem.material}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelector;
