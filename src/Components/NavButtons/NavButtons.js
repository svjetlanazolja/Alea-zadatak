import Button from "../Button.js/Button";
import "./style.css"

const NavButtons = () => {
  return (
    <div className="NavButtonsContainer">
        <Button
        onClick={() => {}}
        type="button"
        buttonStyle="btn--yellow"
        buttonSize="btn--large"
      >
        <span>All</span>
      </Button>
      <Button
        onClick={() => {}}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Bonus</span>
      </Button>
      <Button
        onClick={() => {}}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Collapsing</span>
      </Button>
      <Button
        onClick={() => {}}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Freespins</span>
      </Button>
      <Button
        onClick={() => {}}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Jackpot</span>
      </Button>
      <Button
        onClick={() => {}}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <span>Multipliers</span>
      </Button>
      <Button
        onClick={() => {}}
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
