const input = document.querySelector(".input");
const results = document.querySelector(".results");

const api =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

// fetch data
fetch(api)
  .then((data) => data.json())
  .then((data) => cities.push(...data));

const findCities = (word, cities) => {
  return cities.filter((data) => {
    const regex = new RegExp(word, "gi");
    return data.city.match(regex) || data.state.match(regex);
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayCities = (e) => {
  const word = e.target.value;
  const citiesArray = findCities(word, cities);
  const html = citiesArray
    .map((place) => {
      const regex = new RegExp(word, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${word}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${word}</span>`
      );
      return `
        <div class="city">
          <div class="name">${cityName}, ${stateName}</div>
          <div class="population">${numberWithCommas(place.population)}</div>
        </div>
      `;
    })
    .join("");
  results.innerHTML = html;
};

input.addEventListener("input", displayCities);

// add default
window.onload = () => {
  input.focus();
  input.value = "cal";
  displayCities({ target: { value: "cal" } });
};
