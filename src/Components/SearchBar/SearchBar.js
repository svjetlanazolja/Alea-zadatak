import SearchImg from "../../Assets-img/Search.svg";
import "./style.css";
import { useState, useEffect } from "react";

const SearchBar = ({ placeholder, data, onQuery }) => {
  function handleInput(e) {
    console.log("handleInput", e);
    onQuery(e.target.value);
  }

  const [mostPlayedGames, setMostPlayedGames] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/allGames");
    setMostPlayedGames(await response.json());
  };

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = mostPlayedGames.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="search">
      <div className="searchInputs searchInputsDes ">
        <div className="searchIcon">
          <img alt="SearchGames" src={SearchImg} />
        </div>
        {/* <input type="text" placeholder="Search games" onChange={handleFilter} /> */}
        <input type="text" placeholder="Search games" onInput={handleInput} />
      </div>

      <div className="searchInputs searchInputsResponsive">
        <div className="searchIcon">
          <img alt="SearchGames" src={SearchImg} />
        </div>
        <input type="text" placeholder="Search games" onInput={handleInput} />
        {/* <div className="butonNavResponsive">
          <button className="buttonSearch" onClick={handleClick}>
            <img src={SEARCHFILTER} alt="Search Filter" />
          </button>
          {isShown && <NavButtons />}
        </div> */}
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a key={value.id} href="/#" className="dataItem">
                {value.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
