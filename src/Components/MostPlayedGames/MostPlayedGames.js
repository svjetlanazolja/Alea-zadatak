import { useEffect, useState } from "react";
import CardInfo from "../CardInfo/CardInfo";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages" 
import "./style.css";

const MostPlayedGames = () => {
  const { MOSTPLAYEDGAMES } = CardInfoImages
  const [mostPlayedGames, setMostPlayedGames] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/mostPlayedGames");
    setMostPlayedGames(await response.json());
  };

  return (
    <div className="CardContainer">
      <CardInfo title={"Most played Games"} icon={MOSTPLAYEDGAMES} />
      <div className="MostPlayedGamesContainer">
        {mostPlayedGames.map((data) => {
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

export default MostPlayedGames;
