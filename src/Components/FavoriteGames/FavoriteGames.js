import { useEffect, useState } from "react";
import CardInfo from "../CardInfo/CardInfo";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages" 
import "./style.css";

const FavoriteGames = () => {
  const { FAVORITEGAMES } = CardInfoImages
  const [favoriteGames, setFavoriteGames] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/favoriteGames");
    setFavoriteGames(await response.json());
  };

  return (
    <div className="CardContainer">
      <CardInfo title={"Favorite Games"} icon={FAVORITEGAMES} />
      <div className="FavoriteGamesContainer">
        {favoriteGames.map((data) => {
          return (
            <div key={data.id} className="FavoriteWinsData">
              <div className="BigestWinsImage">
                <img src={data.path} alt="Favorite Games" className="GameImg" />
              </div>
              <div className="FavoritetWinsDescription">
                <p>{data.title}</p>
                <div className="DescriptionItem">
                  <p>{data.reels}</p>
                  <p>{data.jackpot}</p>
                  <p>{data.bonus}</p>
                </div>
              </div>
              <div className="BiggestWingsStar">
                <img
                  src={data.starPath}
                  alt="Favorite Games"
                  className="star"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteGames;
