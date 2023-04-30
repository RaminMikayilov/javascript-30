// start with strings, numbers and booleans

// Let's say we have an array
const players = ["Ronaldo", "Messi", "Benz", "Neymar"];

// and we want to make a copy of it.

// You might think we can just do something like this:
// const copy = players;
// console.log(copy);

// however what happens when we update that array?
// copy[2] = "Bale";
// console.log(copy); // ['Ronaldo', 'Messi', 'Bale', 'Neymar']

// now here is the problem!

// oh no - we have edited the original array too!
// console.log(players); // ['Ronaldo', 'Messi', 'Bale', 'Neymar']

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
// const copy = players.slice();
// console.log(copy);
// copy[2] = "Bale";
// console.log(copy); // ['Ronaldo', 'Messi', 'Bale', 'Neymar']
// console.log(players); // ['Ronaldo', 'Messi', 'Benz', 'Neymar']

// or create a new array and concat the old one in
// const copy = [].concat(players);
// console.log(copy);
// copy[2] = "Bale";
// console.log(copy); // ['Ronaldo', 'Messi', 'Bale', 'Neymar']
// console.log(players); // ['Ronaldo', 'Messi', 'Benz', 'Neymar']

// or use the new ES6 Spread
// const copy = [...players];
// console.log(copy);
// copy[2] = "Bale";
// console.log(copy); // ['Ronaldo', 'Messi', 'Bale', 'Neymar']
// console.log(players); // ['Ronaldo', 'Messi', 'Benz', 'Neymar']

// const copy = Array.from(players);
// console.log(copy);
// copy[2] = "Bale";
// console.log(copy); // ['Ronaldo', 'Messi', 'Bale', 'Neymar']
// console.log(players); // ['Ronaldo', 'Messi', 'Benz', 'Neymar']

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Ramin Mikayilov",
  age: 19,
};

// and think we make a copy:
// const copy = person;
// copy.age = 20;
// console.log(copy); // {name: "Ramin Mikayilov", age: 20}
// console.log(person); // {name: "Ramin Mikayilov", age: 20}

// how do we take a copy instead?
// const copy = Object.assign({}, person, { age: 20 });
// console.log(copy); // {name: "Ramin Mikayilov", age: 20}
// console.log(person); // {name: "Ramin Mikayilov", age: 19}

// We will hopefully soon see the object ...spread
// const copy = { ...person };
// copy.age = 20;
// console.log(copy); // {name: "Ramin Mikayilov", age: 20}
// console.log(person); // {name: "Ramin Mikayilov", age: 19}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// shallow vs deep copy - all of them is shallow copy except lodash cloneDeep and JSON.parse(JSON.stringify(obj))
// deep copy use cases - when you want to copy nested objects and arrays
// shallow copy use cases - when you want to copy only first level of object or array
const nestedObj = {
  name: "Ramin",
  age: 19,
  social: {
    linkedin: "in/raminmikayilov",
    facebook: "raminmikayilov",
  },
};

// const shallowCopy = { ...nestedObj };
// shallowCopy.social.linkedin = "in/raminmikayilov2";
// console.log(shallowCopy.social.linkedin); // in/raminmikayilov2
// console.log(nestedObj.social.linkedin); // in/raminmikayilov2 - it is changed

const deepCopy = JSON.parse(JSON.stringify(nestedObj));
deepCopy.social.linkedin = "in/raminmikayilov3";
console.log(deepCopy.social.linkedin); // in/raminmikayilov3
console.log(nestedObj.social.linkedin); // in/raminmikayilov - it is not changed
