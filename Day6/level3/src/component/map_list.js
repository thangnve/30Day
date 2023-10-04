const Country = ({ country: { country, population } }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <h3>{country}</h3>
      <h3>{population}</h3>
    </div>
  );
};

const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.country} country={country} />
  ));
  return <div>{countryList}</div>;
};
export default Countries;
