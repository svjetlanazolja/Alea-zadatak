import Button from "../Button.js/Button";
import "./style.css";
import { useState } from "react";

const NavButtons = ({ onChangeQuery }) => {
  const [selectedCategory, setselectedCategory] = useState([]);
  

  function onClick(name) {
    if (name === "All") {
      setselectedCategory([]);
      onChangeQuery([]);
      return;
    }
    if (selectedCategory.includes(name)) {
      selectedCategory.splice(selectedCategory.indexOf(name), 1);
      setselectedCategory(selectedCategory);
      onChangeQuery(selectedCategory);
    } else {
      setselectedCategory([...selectedCategory, name]);
      onChangeQuery([...selectedCategory, name]);
    }
  }

  return (
    <div className="NavButtonsContainer" id="NavButtonsContainerContainer">
      <Button
        onClick={(e) => onClick("All")}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>All</span>
      </Button>
      <Button
        onClick={(e) => onClick("Bonus")}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Bonus</span>
      </Button>
      <Button
        onClick={(e) => onClick("Collapsing")}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Collapsing</span>
      </Button>
      <Button
        onClick={(e) => onClick("Freespins")}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Freespins</span>
      </Button>
      <Button
        onClick={(e) => onClick("Jackpot")}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Jackpot</span>
      </Button>
      <Button
        onClick={(e) => onClick("Multipliers")}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Multipliers</span>
      </Button>
      <Button
        onClick={(e) => onClick("3 Reels")}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>3 Reels</span>
      </Button>
    </div>
  );
};

export default NavButtons;
