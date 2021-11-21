import express from "express";
import config from "./config.js";
import router from "./router.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello from the other World...");
});

app.use(express.json());

app.use("/api", router);

app.listen(config.port, () => {
  console.info(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
