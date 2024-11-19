import React, { useState } from "react";

const Dropdown = ({ title, options, func }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState("Select an option");

  //   const toggleDropdown = () => setIsOpen(!isOpen);

  //   const handleOptionClick = (option) => {
  //     setSelectedOption(option);
  //     setIsOpen(false); // Close dropdown after selection
  //   };

  return (
    // <div className="relative w-64">
    //   {/* Selected Item */}
    //   <button
    //     onClick={toggleDropdown}
    //     className="w-full bg-gray-800 text-white px-4 py-2 rounded-md text-left shadow-md focus:outline-none"
    //   >
    //     {selectedOption}
    //     <span className="float-right">
    //       <i className={`ri-arrow-${isOpen ? "up" : "down"}-s-line`}></i>
    //     </span>
    //   </button>

    //   {/* Dropdown Options */}
    //   {isOpen && (
    //     <ul className="absolute w-full bg-gray-700 mt-2 rounded-md shadow-lg z-10">
    //       {["Movies", "Tv", "All"].map((option, index) => (
    //         <li
    //           key={index}
    //           onClick={() => handleOptionClick(option)}
    //           className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer"
    //         >
    //           {option}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>

    <div className="dropdown-container rounded-md bg-[#1F2937]">
      {/* Selected Item */}
      <button  className="dropdown-button">{title}</button>

      {/* Dropdown Options */}
      <ul onChange={()=>func()} className="dropdown-menu text-white text-base font-normal">
        {options.map((o, index) => (
          <li key={index} className="dropdown-item ">
            {o}
          </li>
        ))}
      </ul>
      {/* // <li className="dropdown-item">Option 1</li>
        // <li className="dropdown-item">Option 2</li>
        // <li className="dropdown-item">Option 3</li> */}
    </div>
  );
};

export default Dropdown;
