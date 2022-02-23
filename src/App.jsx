import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ResultGrid from "./components/ResultGrid";
import Search from "./components/Search";
import useStore from "./useStore";

async function fetchCountries() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch {
    return [];
  }
}

function App() {
  const setCountries = useStore((state) => state.setCountries);

  useEffect(async () => {
    const countries = await fetchCountries();

    setCountries(countries);
  }, []);
  return (
    <>
      <Header />
      <Search />
      <ResultGrid />
    </>
  );
}

export default App;
