import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/BudgetCalculator.jpg" alt="BudgetCalculator" />
        </div>
        <div>
          <img src="/Tours.jpg" alt="Tours" />
        </div>
        <div>
          <img src="/ReactNotes.jpg" alt="ReactNotes" />
        </div>
      </Slider>
    </div>
  );
}
