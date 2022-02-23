/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import useStore from "../useStore";

function ResultGrid() {
  const countries = useStore((state) => state.countries);
  const filter = useStore((state) => state.filter);
  const search = useStore((state) => state.search);

  if (!countries) {
    return <div />;
  }

  return (
    <div className="resultGrid">
      {countries
        .filter((country) => {
          if (filter && country.region === filter) {
            return country;
          }
          if (!filter) {
            return country;
          }
        })
        .filter((country) => {
          if (
            search &&
            country.name.official.toLowerCase().includes(search.toLowerCase())
          ) {
            return country;
          }
          if (!search) {
            return country;
          }
        })
        .slice(0, 15)
        .map((country) => (
          <div key={country.ccn3}>{country.name.official}</div>
        ))}
    </div>
  );
}

export default ResultGrid;
