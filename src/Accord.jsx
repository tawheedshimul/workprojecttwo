import React, { useState } from 'react';

function ProgressBar() {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-36">
      <div className="relative w-3/4 px-2">
        {/* pin div start */}
        <div className="absolute border-none bg-[#0B453C] top-[-45px] pin rotate-45 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center" style={{ left: `calc(${value}%/1.031 + 14px )` }}>
          {/* pin div end  */}
          <span className="text-white -rotate-45 text-[12px]">{value}</span>
        </div>


        <div className="track">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="slider"
          />
        </div>
      </div>
      <style jsx>{`
        .track {
          width: 100%;
          height: 2px;
          background-color: #0B453C;
          position: relative;
          border-radius: 1px;
        }

        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 2px;
          background: transparent;
          outline: none;
          position: absolute;
          top: 0;
          left: 0;
          margin: 0;
          padding: 0;
          cursor: pointer;
          z-index: 1;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #0B453C;
          position: relative;
          z-index: 2;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
          transition: background-color 0.3s ease; /* Add transition effect */
        }

        .slider:hover::-webkit-slider-thumb {
          background: #125c5184; /* Change background color on hover */
        }

        .slider:active::-webkit-slider-thumb {
          animation: ripple 0.4s ease; /* Add ripple animation on click */
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
