import { useEffect, useState } from "react";
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

  return (
    <div className="NavbarItemsContainer">
      <div className="NavbarContainer">
        <div className="NavbarItems">
          {navbarItems.map((data) => {
            return (
              <nav key={data.id} className="NavbarData">
                <ul className="NavbarUL">
                  <li className="NavbarLI">
                    <a href="/#" className="NavbarList">
                      <img src={data.path} alt="Game" className="GameImg" />
                    </a>
                  </li>
                </ul>
              </nav>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarItems;
