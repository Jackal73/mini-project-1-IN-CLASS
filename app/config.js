import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    clientConnection: process.env.DB_CONNECTION,
    name: "sample_airbnb",
    collection: "listingsAndReviews",
  },
  port: process.env.PORT || 3000,
};
