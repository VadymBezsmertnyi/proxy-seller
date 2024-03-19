import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "./App";
import { Helmet } from "react-helmet";

const app = express();

app.get("*", (req, res) => {
  const appMarkup = renderToString(<App url={req.url} />);
  const helmet = Helmet.renderStatic();

  res.send(`
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${appMarkup}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
