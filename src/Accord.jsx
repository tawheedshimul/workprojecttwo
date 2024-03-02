import React, { useState } from 'react';

function Accord() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="m-2 space-y-2">
      <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white" tabIndex="1">
        <div className="flex cursor-pointer items-center justify-between" onClick={toggleAccordion1}>
          <span> HTML </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className={`h-2 w-3 transition-all duration-1000 ${isOpen1 && 'rotate-180'}`}
          />
        </div>
        <div
          className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-500 ${isOpen1 && 'max-h-screen opacity-100'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>

      <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white" tabIndex="2">
        <div className="flex cursor-pointer items-center justify-between" onClick={toggleAccordion2}>
          <span> CSS </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className={`h-2 w-3 transition-all duration-1000 ${isOpen2 && 'rotate-180'}`}
          />
        </div>
        <div
          className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-500 ${isOpen2 && 'max-h-screen opacity-100'}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
}

export default Accord;
