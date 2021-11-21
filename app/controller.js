import client from "./client.js";
import config from "./config.js";

export default {
  // get all the stuff
  index(queryParams) {
    // Destructure queryParams, taking out limit, using spread operator, calling rest of params 'filters' .
    const { limit, ...filters } = queryParams;

    // console.log(limit, filters);
    // console.log(Object.entries(filters));

    return client
      .db(config.db.name)
      .collection(config.db.collection)
      .find({})
      .limit(Number(queryParams.limit) || 20)
      .toArray();
  },
};

// ------------------------------ Self Notes ------------------------------
// ***--- Test URLs ---***
// With "limit" = http://localhost:3000/api/current-listings?limit=1

// With "lte" = http://localhost:3000/api/current-listings?limit=1&lte=200

// With "keywords" = http://localhost:3000/api/current-listings?limit=1&lte=200&keywords=sunny+fantastic

// ***--- USE Bracket notation, do NOT use dot notation: will not work! ---***
// Example:

// const person = {
//   name: "mark",
//   property2Add: 23
// }

// const property2Add = "age"
// person.name
// person[property2Add] = 23

// ***--- Array destructuring: review notes(177) ---***
// Example:

// const groceries = ["apple", "pear", "carrot"]
// const [a, p] = groceries

// ***--- Doesn't work - mess with later ---***
// Use reduce and array destructuring.
// const listingsFilters = Object.entries(filters).reduce(
//   (accumulator, [keyword, value]) => {
//     accumulator[keyword] = { [`$${keyword}`]: value };
//     return accumulator;
//   },
//   {}
// );

// console.log(listingsFilters);
