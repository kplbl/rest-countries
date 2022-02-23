import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import useStore from "../useStore";

function Header() {
  const darkmode = useStore((state) => state.dark);
  const toggleDark = useStore((state) => state.toggle);
  return (
    <header className="header shadow">
      <div className="header__title">Where in the world?</div>
      <button type="button" className="header__darkmode" onClick={toggleDark}>
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode {darkmode ? "dark" : "light"}
      </button>
    </header>
  );
}

export default Header;
