import React from "react";

const Dropdown = ({ title, options }) => {
  return (
    <div className="select">
      <select defaultValue="0" name="format" id="format">

        <option value="" disabled>
          {title}
        </option>
        {options.map((o, i) => {
         return <option key={i} value="0" disabled>
          {o}
        </option>
        })}
        
      </select>
    </div>
  );
};

export default Dropdown;
