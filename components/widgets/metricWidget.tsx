import React from "react";

interface Props {
  value: number;
}
export const MetricRange = ({ value }: Props) => {
  return (
    <>
      <div className="sliderContainer">
        <input
          className="slider"
          type="range"
          min="1"
          max="100"
          value={value}
        />
      </div>
    </>
  );
};
