import { ButtonGroupProps, CarouselInternalState } from "react-multi-carousel";

const ButtonGroup = ({ next, previous, ...rest }: ButtonGroupProps) => {
  const carouselState = rest.carouselState as CarouselInternalState;
  const currentSlide = carouselState.currentSlide;

  const handlePreviousClick = () => {
    const scrollPrevious = previous as () => void;

    scrollPrevious();
  };

  const handleNextClick = () => {
    const scrollNext = previous as () => void;

    scrollNext();
  };

  return (
    <div className="carousel-button-group">
      <button
        className={
          currentSlide === 0
            ? "disable"
            : "text-white arrow-btn bg-pink-600 rounded-full absolute left-0 p-3 top-1/2 translate-y-[-50%] flex justify-center"
        }
        onClick={() => handlePreviousClick}
      >
        {currentSlide > 0 && (
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        )}
      </button>
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
    </div>
  );
};

export default ButtonGroup;
