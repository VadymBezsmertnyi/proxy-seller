import React from "react";
import express from "express";
import { Helmet } from "react-helmet";
import { renderToString } from "react-dom/server";

// main component
import App from "./App";

// apis
import { fetchDataAlbums, fetchDataPosts, fetchDataUsers } from "./api";

// styles
import { styles } from "./styles";

const app = express();

app.get("*", async (req, res) => {
  const users = await fetchDataUsers();
  const posts = await fetchDataPosts();
  const albums = await fetchDataAlbums();
  const appMarkup = renderToString(
    <App url={req.url} initialState={{ users, posts, albums }} />
  );
  const helmet = Helmet.renderStatic();

  res.send(`
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${styles}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${appMarkup}</div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
