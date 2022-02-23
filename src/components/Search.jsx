import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useStore from "../useStore";

function Search() {
  const filter = useStore((state) => state.filter);
  const search = useStore((state) => state.search);
  const setSearch = useStore((state) => state.setSearch);
  const setFilter = useStore((state) => state.setFilter);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const onFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="search">
      <div className="search__container shadow">
        <FontAwesomeIcon className="search__icon" icon={faSearch} />
        <input
          className="search__input"
          placeholder="Search for a country..."
          type="text"
          onChange={onSearch}
          value={search}
        />{" "}
      </div>

      <select onChange={onFilter} value={filter} className="search__select">
        <option value="" disabled selected>
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Search;
