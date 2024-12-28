import React from "react";

import "./index.css"

const SaveShare = ({ selectedCase, selectedBand, selectedSize }) => {
  const handleSave = () => {
    // Logic for saving or sharing
    alert("Configuration saved!");
  };

  return (
      <button onClick={handleSave} className="save-button-styling">Save</button>
  );
};

export default SaveShare;
