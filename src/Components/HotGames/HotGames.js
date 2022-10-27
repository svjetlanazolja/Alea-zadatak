import { useEffect, useState } from "react";
import CardInfo from "../CardInfo/CardInfo";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages";
// import imageyllowstar from "../../Assets-img/yellow-star.png"
import "./style.css";

const HotGames = () => {
  const { HOTGAMES } = CardInfoImages;
  const [hotGames, setHotGames] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/allGames");
    const jsonResponse = await response.json();
    const hotGamesResponse = jsonResponse.filter(function (i) {
      return i.isHotGame === true;
    });
    setHotGames(hotGamesResponse);
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
  function GetImgSource(isFav, path) 
  {
    return isFav ? "/assets/yellow-star.png" : path;
  }

  return (
    <div className="CardContainer width25">
      <CardInfo title={"Hot Games"} icon={HOTGAMES} />
      <div className="HotGamesContainer">
        {hotGames.map((data) => {
          return (
            // const imgsrc = data.isFavoriteGames ? "../../Assets-img/yellow-star.png" : data.starPath;
            <div key={data.id} className="HotGamesCard">
              <img src={data.path} alt="Hot Games" className="GamesImg" />
              <div className="HotGameItem">
                <p className="p-bold">{data.title}</p>

                <img
                  src={GetImgSource(data.isFavoriteGames, data.starPath)}
                  onClick={() => setFavoriteGame(data.id)}
                  alt="Hot Games"
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

export default HotGames;
