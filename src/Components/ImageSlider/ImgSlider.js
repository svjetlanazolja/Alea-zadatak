import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const ImagesSlider = () => {
  const [imgSlider, setImgSlider] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/imagesSlider");
    setImgSlider(await response.json());
  };

  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      arrows: false,
      autoplay: true,
  };

  return (
    <div className="sliderContainer width50 imageSliderRes" id="imgSliderCard">
      <Slider {...settings}>
        {imgSlider.map((data) => {
          return (
            <div key={data.id} className="imgCardContainer">
              <div style={{ padding: "0 15px" }} className="cartImg ">
                <img
                  src={data.path}
                  alt="Buffalo Blitz"
                  className="GameImg"
                />
              </div>           
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImagesSlider;
