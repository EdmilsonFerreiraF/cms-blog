import React from "react";

type Props = {
  currentSlide: number;
  next: (() => void) | undefined;
};

const CustomRightBtn = ({ currentSlide, next }: Props) => {
  const handleNextClick = () => {
    const scrollNext = next as () => void;

    scrollNext();
  };

  return (
    <button
      className="text-white arrow-btn bg-pink-600 rounded-full absolute right-0 p-3 top-1/2 translate-y-[-50%] flex justify-center"
      onClick={() => handleNextClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
};

export default CustomRightBtn;
