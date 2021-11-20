import Router from "express";
import controller from "./controller.js";

const router = new Router();

// GET: /api
router.get("/", (_, res) => {
  res.send("Hello from API!");
});

router.get("/current-listings", async (_, res) => {
  const currentListings = await controller.index();

  res.json(currentListings);
});

export default router;
