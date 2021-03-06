import React from "react";

const RightArrowBtn = () => {
  return (
    <div className="absolute flex justify-center arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full">
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
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );
};

export default RightArrowBtn;
