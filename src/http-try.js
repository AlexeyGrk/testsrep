const refs = {
  inputnRef: document.querySelector(".input-country-js"),
};

function fetchCountry(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(
    (r) => {
      return [r.json()];
    }
  );
}
refs.inputnRef.addEventListener("input", (e) => {
  console.log(refs.inputnRef.value);
});
