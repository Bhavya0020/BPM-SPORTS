"use client";
import React, { useState } from "react";

const Slider = () => {
  // State to track the slider value
  const [sliderValue, setSliderValue] = useState(10);

  // Function to handle slider changes
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="w-full max-w-xs mt-6">
      {/* Slider Input */}
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
        className="range"
        step={10}
      />

      {/* Marks (|) */}
      <div className="w-full flex justify-between px-2.5 mt-1 text-xs">
        {Array.from({ length: 11 }).map((_, index) => (
          <span key={index}>.</span>
        ))}
      </div>

      {/* Labels (0, 10, 20, ..., 100) */}
      {/* <div className="w-full flex justify-between px-2.5 mt-2 text-xs">
        {Array.from({ length: 11 }).map((_, index) => (
          <span key={index}>{index * 10}</span>
        ))}
      </div> */}

      {/* Display Current Value (Optional) */}
      <div className="mt-4 text-center">
        <span className="text-lg font-semibold">Current Value: {sliderValue}</span>
      </div>
    </div>
  );
};

export default Slider;