import "dotenv/config";
import express from "express";

import { router } from "./routers";

const app = express();

app.use(router);

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  return res.json(code);
});

app.listen(3000, () => {
  console.log("App running");
});
