import { useEffect, useState } from "react";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages" 
import DropdownMeni from "../DropdownMenu/DropdownMeni";
import Button from "../Button.js/Button";
import "./style.css";

const NavbarItems = () => {
  const [navbarItems, setNavbarItems] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/navbarItems");
    setNavbarItems(await response.json());
  };

  const { GAMESSHOP } = CardInfoImages

  return (
    <div className="NavbarItemsContainer">
      <div className="buttonContainer">
        <Button
          onClick={() => {
          }}
          type="button"
          buttonStyle="btn--yellow"
          buttonSize="btn--large"
          className="GameShopImage"
        >
          <img src={ GAMESSHOP } alt="Games Shop" className="gameShopImg" />
          <p className="ShopP">Games Shop</p>
        </Button>
      </div>

      <div className="NavbarContainer">
         <div className="NavbarItems">
        {navbarItems.map((data) => {
          return (
              <nav key={data.id} className="NavbarData">
                <ul className="NavbarUL">
                  <li className="NavbarLI">
                    <a href="/#" className="NavbarList">
                      <img
                        src={data.path}
                        alt="Game"
                        className="GameImg"
                      />
                      <p className="p-bold">{data.title}</p>
                    </a>
                  </li>
                </ul>
              </nav>
          );
        })}
      </div>
      <div className="DropdownMenu">
      <DropdownMeni />
        </div> 
      </div>

     
    </div>
  );
};

export default NavbarItems;
