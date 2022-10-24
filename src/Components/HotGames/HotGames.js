import { useEffect, useState } from "react";
import CardInfo from "../CardInfo/CardInfo";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages" 

import "./style.css";

const HotGames = () => {
  const { HOTGAMES } = CardInfoImages;
  const [hotGames, setHotGames] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/hotgames");
    setHotGames(await response.json());
  };

  return (
    <div className="CardContainer width25">
      <CardInfo title={"Hot Games"} icon={HOTGAMES} />
      <div className="HotGamesContainer">
        {hotGames.map((data) => {
          return (
            <div key={data.id} className="HotGamesCard">
              <img src={data.path} alt="Hot Games" className="GamesImg" />
              <div className="HotGameItem">
                <p className="p-bold">{data.title}</p>
                <img src={data.starPath} alt="Hot Games" className="star" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotGames;
