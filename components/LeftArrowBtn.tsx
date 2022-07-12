import React from "react";

const LeftArrowBtn = () => {
  return (
    <div className="absolute flex justify-center adjacent-post arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );
};

export default LeftArrowBtn;
