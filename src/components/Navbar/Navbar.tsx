import { FaBars, FaReact } from "react-icons/fa";
import { user_data } from "../../libs/data";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import "./navbar.scss";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState<boolean>(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navabar_container">
          <FaReact size={30} className="logo" />
        </div>
        <ul
          className={
            toggleIcon
              ? "navabar_container_menu active"
              : "navabar_container_menu"
          }
        >
          {user_data.map((item: any, key: any) => (
            <li className="navabar_container_menu_item" key={key}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="nav_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
