import { useEffect, useState } from "react";
import CardInfoImages from "../../Assets-img/CardInfoImages/CardInfoImages";
import "./style.css"

const DropdownMeni = () => {
  const { USER } = CardInfoImages;

  const dropbar = [
    { id: "1", name: "slottest1" },
    { id: "2", name: "slottest2" },
  ];

  const [showDropbar, setshowDropbar] = useState([]);

  useEffect(() => {
    setshowDropbar(dropbar);
  }, []);

  return (
    <div className="DropbarContainer">
         <img src={USER} alt="User" className="UserImg" />
      <select className="DropbarButton">
        <option value="0">slottest</option>
        {showDropbar && showDropbar !== undefined
          ? showDropbar.map((dbox, index) => {
              return (
                <option key={index} value={dbox.id}>
                  {dbox.name}
                </option>
              );
            })
          : "set dropdown"}
      </select>
    </div>
  );
};

export default DropdownMeni;
