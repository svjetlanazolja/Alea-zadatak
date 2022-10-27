import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

const TournamentsSlider = () => {
  const { AGEOFTHEGODS, BUFFALOBLITZ } = CardInfoImages;

  return (
    <div className="sliderContainer TournamentsSliderContainer" id="imgSliderCard">
      <Slider {...settings}>
      <div>
        <CountdownTimer
          countdownTimestampMs={1671321162000}
          image={AGEOFTHEGODS}
        />
      </div>
      <div>
        <CountdownTimer
          countdownTimestampMs={1671111152000}
          image={BUFFALOBLITZ}
        />
      </div>
      </Slider>
    </div>
  );
};

export default TournamentsSlider;
