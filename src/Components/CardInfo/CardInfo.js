import "./style.css";

const CardInfo = ({ title, icon }) => {
  return (
    <div className="CardInfoContainer">
      <div className="CardInfoDescription">
        <img src={icon} alt="Games" className="CardInfoIcon" />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CardInfo;
