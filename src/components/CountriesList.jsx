import Country from "./Country";

function CountriesList({ countries, input }) {
  if (countries.length === 0) return;

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="grid grid-cols-4 gap-10">
      {filteredCountries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountriesList;
