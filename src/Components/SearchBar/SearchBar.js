import SearchImg from "../../Assets-img/Search.svg";
import "./style.css";
import { useState, useEffect } from "react";

// U Search bar sam iz json-servera (db.json) za zadatak sada povukla podatke samo iz mostPlayedGame liste

const SearchBar = ({ placeholder, data }) => {
  const [mostPlayedGames, setMostPlayedGames] = useState([]);
  useEffect(() => {
    games();
  }, []);

  const games = async () => {
    const response = await fetch("http://localhost:8000/mostPlayedGames");
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

  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          <img alt="SearchGames" src={SearchImg} />
        </div>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a  key={value.id}  href="/#" className="dataItem">
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
