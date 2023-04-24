const cars = [
  { name: "BMW", year: 2017 },
  { name: "mercedes", year: 2018 },
];

function makeBlue() {
  const p = document.querySelector("p");
  p.style.color = "#F00";
  p.style.fontSize = "70px";
}

// Regular
console.log("Hello JavaScript");

// Interpolated
console.log("Hello I am a %s string!", "😎");

// Styled
console.log("%c hello world", "font-size:50px; background:blue; color:white");

// warning!
console.warn("warning!!!");

// Error :|
console.error("errroorr...");

// Info
console.info("info...");

// Testing
// assert - iddia etmek, tesdiqlemek
console.assert({} === {}, "that is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(document.querySelector("p"));

// Grouping together
cars.forEach((car) => {
  console.groupCollapsed(`${car.name}`);
  console.log(`this is ${car.name}`);
  console.log(`${car.name} was made in ${car.year}`);
  console.groupEnd(`${car.name}`);
});

// counting
console.count("html");
console.count("html");
console.count("html");
console.count("html");
console.count("html");

console.count("css");
console.count("css");
console.count("css");

// timing
console.time("calculate time");
for (let i = 0; i < 100000; i++) {
  if (i === 99999) console.timeEnd("calculate time");
}

// table
console.table(cars);
