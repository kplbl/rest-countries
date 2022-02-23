import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search">
      <div className="search__container shadow">
        <FontAwesomeIcon className="search__icon" icon={faSearch} />
        <input
          className="search__input"
          placeholder="Search for a country..."
          type="text"
        />{" "}
      </div>

      <select className="search__select">
        <option value="" disabled selected>
          Filter by region
        </option>
        <option value="test">`test`</option>
      </select>
    </div>
  );
}

export default Search;
