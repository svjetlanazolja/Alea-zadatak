import SearchBar from "../SearchBar/SearchBar";
import NavButtons from "../NavButtons/NavButtons";
import RecommendedSlider from "../RecommendedSlider/RecommendedSlider";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages";
import SearchImg from "../../Assets-img/Search.svg";
import { useEffect, useState } from "react";
import "./style.css";

const SearchFilterRecommended = () => {
  const [query, setQuery] = useState("");
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const { SEARCHFILTER } = CardInfoImages;

  useEffect(() => {
    console.log("useEffect");
    games();
  }, []);

  const games = async (param) => {
    const response = await fetch("http://localhost:8000/allGames");
    const jsonResponse = await response.json();
    const recommendedGamesResponse = jsonResponse.filter(function (i) {
      return (
        !param ||
        param === "" ||
        i.title.toLowerCase().includes(param.toLowerCase())
      );
    });
    setRecommendedGames(recommendedGamesResponse);
    setAllGames(jsonResponse);
  };

  function filterCategories(categories) {
    let recommendedGamesResponse = allGames.filter(function (i) {
      return (
        !query ||
        query === "" ||
        i.title.toLowerCase().includes(query.toLowerCase())
      );
    });
    console.log(allGames, recommendedGamesResponse, query);

    if (categories.includes("Bonus")) {
      recommendedGamesResponse = recommendedGamesResponse.filter(
        (x) => x.bonus === "Bonus"
      );
    }

    if (categories.includes("Collapsing")) {
      recommendedGamesResponse = recommendedGamesResponse.filter(
        (x) => x.collapsing === "Collapsing"
      );
    }

    if (categories.includes("Freespins")) {
      recommendedGamesResponse = recommendedGamesResponse.filter(
        (x) => x.freespins === "Freespins"
      );
    }

    if (categories.includes("Jackpot")) {
      recommendedGamesResponse = recommendedGamesResponse.filter(
        (x) => x.jackpot === "Jackpot"
      );
    }

    if (categories.includes("Multipliers")) {
      recommendedGamesResponse = recommendedGamesResponse.filter(
        (x) => x.multipliers === "Multipliers"
      );
    }

    console.log("Bonus", allGames, recommendedGamesResponse, query);

    setRecommendedGames(recommendedGamesResponse);
  }

  function onSearch(query) {
    console.log("onSearch", query, query === "", query === undefined, !query);
    games(query);
    setQuery(query);
  }

  function onChangeQuery(query) {
    console.log(query);
    filterCategories(query);
    // console.log('onSearch',query, query==='', query===undefined, !query)
    // games(query);
  }

  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <div className="butonNavigationResponsive" id="butonNavigationResponsive">

        <div className="searchIcon">
          <img alt="SearchGames" src={SearchImg} />
        </div>
        <div className="SearchBarResponsive">
          <SearchBar onQuery={onSearch} />
        </div>
        <div className="buttonResponsive">
          <button className="buttonResponsiveImg" onClick={handleClick}>
            <img src={SEARCHFILTER} alt="Search Filter" />
          </button>
          {isShown && <NavButtons onChangeQuery={onChangeQuery} />}
        </div>
      </div>

      <SearchBar onQuery={onSearch} />
      <div className="NavButtonDesktop"><NavButtons  onChangeQuery={onChangeQuery} /></div>
      
      <RecommendedSlider recommendedGames={recommendedGames} />
    </div>
  );
};

export default SearchFilterRecommended;
