import { ButtonGroupProps, CarouselInternalState } from "react-multi-carousel";
import CustomLeftBtn from "./CustomLeftBtn";
import CustomRightBtn from "./CustomRightBtn";

const ButtonGroup = ({ next, previous, ...rest }: ButtonGroupProps) => {
  const carouselState = rest.carouselState as CarouselInternalState;
  const currentSlide = carouselState.currentSlide;

  return (
    <div className="carousel-button-group">
      <CustomLeftBtn currentSlide={currentSlide} previous={previous} />
      <CustomRightBtn currentSlide={currentSlide} next={next} />
    </div>
  );
};

export default ButtonGroup;
