import Router from "express";
import client from "./client.js";
import config from "./config.js";

const collection = client.db(config.db.name).collection(config.db.collection);

const router = new Router();

// GET: /api
router.get("/", (_, res) => {
  res.send("Hello from API!");
});

router.get("/current-listings", async (_, res) => {
  const currentListings = await collection.find({}).limit(5).toArray();
  res.json(currentListings);
});

export default router;
