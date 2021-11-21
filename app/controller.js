import client from "./client.js";
import config from "./config.js";

export default {
  // get all the stuff
  index(queryParams) {
    return client
      .db(config.db.name)
      .collection(config.db.collection)
      .find({})
      .limit(Number(queryParams.limit) || 20)
      .toArray();
  },
};

// Test URLs
// http://localhost:3000/api/current-listings?limit=1
