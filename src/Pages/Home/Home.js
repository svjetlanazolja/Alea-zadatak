import HotGames from "../../Components/HotGames/HotGames";
import BiggestWins from "../../Components/BiggestWins/BiggestWins";
import GameSlider from "../../Components/RecommendedSlider/RecommendedSlider";
import FavoriteGames from "../../Components/FavoriteGames/FavoriteGames";
import NavbarItems from "../../Components/Navbar/Navbar";
import ImagesSlider from "../../Components/ImageSlider/ImgSlider";
import InformationCard from "../../Components/InformationCard/InformationCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import NavButtons from "../../Components/NavButtons/NavButtons";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages";
import MostPlayedGames from "../../Components/MostPlayedGames/MostPlayedGames";
import CountdownTimer from "../../Components/CountdownTimer/CountdownTimer";
import NavbarMobile from "../../Components/NavbarMobile/NavbarMobile"
import Button from "../../Components/Button.js/Button";
import RecommendedSlider from "../../Components/RecommendedSlider/RecommendedSlider";
import DropdownMeni from "../../Components/DropdownMenu/DropdownMeni";
import "./style.css";

const Home = () => {
  const { AGEOFTHEGODS, BUFFALOBLITZ, GAMESSHOP } = CardInfoImages;

  return (
    <div className="AppContainer">
      <div className="homeContainer">
        <section className="Section1">
          <HotGames />
          <ImagesSlider />
          <BiggestWins />
        </section>

        <section className="Section2">
          <NavbarItems />
        </section>

        <section className="Section3">
          <div className="FavoriteGamesSection width25">
            <FavoriteGames />
          </div>
          <div className=" width50">
            <InformationCard />
            <div className="centralDiv">
              <SearchBar placeholder="Search games" data="games" />
              <NavButtons />
              <GameSlider />
              <div className="TournamentsContainer">
                <h2>Ongoing Tournaments</h2>
                <div className="CountDownTimersCards">
                  <CountdownTimer
                    countdownTimestampMs={1671321162000}
                    image={AGEOFTHEGODS}
                  />
                  <CountdownTimer
                    countdownTimestampMs={1671111152000}
                    image={BUFFALOBLITZ}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="MostPlayedGames width25">
            <MostPlayedGames />
          </div>
        </section>
      </div>

      {/*  mobile*/}

      <section className="MobileAppContainer">
        <div className="User-m">
          <div>
            <Button
              onClick={() => {}}
              type="button"
              buttonStyle="btn--yellow"
              buttonSize="btn--large"
            >
              <img src={GAMESSHOP} alt="Games Shop" className="gameShopImg" />
              <span className="ShopSpan">Games Shop</span>
            </Button>
          </div >
          <DropdownMeni />
        </div>
        <div className="SearchBar-m">
          <SearchBar />
        </div>
        <div className="NavbarMobile-m">
          <NavbarMobile />
        </div>
        <div className="HotGames-m">
          <HotGames />
        </div>
        <div className="BiggestWins-m">
          <BiggestWins />
        </div>
        <div className="InformationCard-m">
          <InformationCard />
        </div>
        <div className="RecommendedSlider-m">
          <RecommendedSlider />
        </div>
        <div className="TournamentsContainer">
          <h2>Ongoing Tournaments</h2>
          <div className="CountDownTimersCards">
            <CountdownTimer
              countdownTimestampMs={1671321162000}
              image={AGEOFTHEGODS}
            />
            <CountdownTimer
              countdownTimestampMs={1671111152000}
              image={BUFFALOBLITZ}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
