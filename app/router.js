import Router from "express";
import controller from "./controller.js";

const router = new Router();

// GET: /api
router.get("/", (_, res) => {
  res.send("Hello from API!");
});

router.get("/current-listings", async (req, res) => {
  const currentListings = await controller.index(req.query);

  res.json(currentListings);
});

router.post("/reviews/:id", async (req, res) => {
  // console.log(req.body, req.params.id);
  const newReview = controller.createReview(req.params.id, req.body);
  res.json(newReview);
});

export default router;
