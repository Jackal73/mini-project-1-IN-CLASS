import Router from "express";

const router = new Router();

// GET: /api
router.get("/", (_, res) => {
  res.send("Hello from API!");
});

export default router;