function Country({ country }) {
  return (
    <div className="p-2 border shadow-lg">
      <div className="h-44">
        <img src={country.flags.png} className="h-full w-full" />
      </div>
      <div>
        <p className="text-2xl font-semibold">{country.name.common}</p>
        <p>{country.capital}</p>
        <p>{country.continents}</p>
      </div>
    </div>
  );
}

export default Country;
