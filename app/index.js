import express from "express";
import config from "./config.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello from the other World...");
});

app.listen(config.port, () => {
  console.info(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
