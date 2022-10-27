import { useEffect, useState } from "react";
import "./style.css";

const InformationCard = () => {
  const [InformationCard, setInformationCard] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/informationCard");
    setInformationCard(await response.json());
  };

  return (
    <div className="InformationCardContainer InformationCardContainerResponsive">
      {InformationCard.map((data) => {
        return (
          <div key={data.id} className="InformationsCardData">
            <div className="BigestWinsImage">
              <img src={data.path} alt="Information" className="GameImg" />
            </div>
            <div className="FavoritetWinsDescription InformationDescription">
              <h3 className="infoTitle">{data.title}</h3>
              <p className="infoP">{data.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InformationCard;
