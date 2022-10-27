import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";
import Button from "../Button.js/Button";
import "./style.css";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs, image }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown-container">
      <div className="image-tournaments">
        <img src={image} alt="Games" className="TourismentImg" />
      </div>

      <div className="countdown-timer">
        <div className="time-circle">
          <span className="two-numbers">{remainingTime.days}</span>
          <span className="time-desc">days</span>
        </div>
        <span className="white-dots">:</span>
        <div className="time-circle">
          <span className="two-numbers">{remainingTime.hours}</span>
          <span className="time-desc">hours</span>
        </div>
        <span className="white-dots">:</span>
        <div className="time-circle">
          <span className="two-numbers">{remainingTime.minutes}</span>
          <span className="time-desc">min</span>
        </div>
        <span className="white-dots">:</span>
        <div className="time-circle">
          <span className="two-numbers">{remainingTime.seconds}</span>
          <span className="time-desc">sec</span>
        </div>
      </div>

      <div className="button-container">
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--join"
          buttonSize="btn--large"
        >
          <span>Join now</span>
        </Button>
      </div>
    </div>
  );
};

export default CountdownTimer;
