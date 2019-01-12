import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => {
  return (
    <div className="flex  f4 pa2">
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
          className="form-check-input"
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
