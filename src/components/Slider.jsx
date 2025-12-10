import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
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
          <img src="https://picsum.photos/id/1018/600/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1024/600/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1037/600/300" />
        </div>
      </Slider>
    </div>
  );
}
