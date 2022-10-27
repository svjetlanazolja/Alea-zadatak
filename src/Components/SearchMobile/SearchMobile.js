import { useState } from "react";
import NavButtons from "./Components/NavButtons/NavButtons";

const SearchMobile = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };
  return (
    <div>
      <button onClick={handleClick}>TEST!!!</button>
      {isShown && <NavButtons />}
    </div>
  );
};

export default SearchMobile;
