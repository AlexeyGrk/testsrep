import debounce from "lodash.debounce";
const refs = {
  inputnRef: document.querySelector(".input-country-js"),
  searchForm: document.querySelector(".js-searchForm"),
  cardList: document.querySelector("js-cardLand"),
};

function fetchCountry(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
    (r) => {
      return r.json();
    }
  );
}

refs.inputnRef.addEventListener(
  "input",
  debounce((e) => {
    console.log(refs.inputnRef.value);
  }, 500)
);
function findCountry(event) {
  event.preventDefault();
  const searchQuery = refs.searchForm.elements.query.value;
  fetchCountry(searchQuery).then((country) => {
    console.log(...country);
  });
}
