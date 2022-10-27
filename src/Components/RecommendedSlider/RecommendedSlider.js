import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const GameSlider = () => {
  const [recommendedGames, setRecommendedGames] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/allGames");
    const jsonResponse = await response.json();
    const recommendedGamesResponse = jsonResponse.filter(function (i) {
      return i.isRecomended === true;
    });
    setRecommendedGames(recommendedGamesResponse);
  };

  function setFavoriteGame(id) {
    const updateGame = {
      isFavoriteGames: true,
    };
    fetch("http://localhost:8000/allGames/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateGame),
    });
    window.location.reload();
  }
  function GetImgSource(isFav, path) {
    return isFav ? "/assets/yellow-star.png" : path;
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesPerRow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="gameSlider" id="recommendedGamesCard">
      <h2>Recommended</h2>
      <Slider {...settings}>
        {recommendedGames.map((data) => {
          return (
            <div key={data.id} className="recommendedGamesCard">
              {/* <div style={{ padding: "10px" }} className="cartImg"> */}
              <div className="cartImg">
                <img
                  src={data.path}
                  alt="Recommended Games"
                  className="GameImg"
                />
              </div>

              <div className="cardDescriptionContainer">
                <div className="cardDescription">
                  <p>{data.title}</p>
                  <img
                    src={GetImgSource(data.isFavoriteGames, data.starPath)}
                    onClick={() => setFavoriteGame(data.id)}
                    alt="Recommended Games"
                    className="star"
                  />
                </div>
              </div>

              <div className="cardItems">
                <div className="fill">
                  <p>{data.reels}</p>
                </div>
                <div className="fill">
                  <p>{data.jackpot}</p>
                </div>
                <div className="fill">
                  <p>{data.freespin}</p>
                </div>
              </div>
              <div className="RecommendedIcon">
                <img src={data.icon} alt="Recommended Games" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GameSlider;
