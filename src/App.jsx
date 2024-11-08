import { useState } from "react";
import { useEffect } from "react";
import CountriesList from "./components/CountriesList";
import SearchBar from "./components/SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);

  return (
    <div>
      <SearchBar input={input} setInput={setInput} />
      <CountriesList countries={countries} input={input} />
    </div>
  );
}

export default App;
