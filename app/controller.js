import client from "./client.js";
import config from "./config.js";

export default {
  // get all the stuff
  index() {
    return client
      .db(config.db.name)
      .collection(config.db.collection)
      .find({})
      .limit(5)
      .toArray();
  },
};
