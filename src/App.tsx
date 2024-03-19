import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

// types
import { AlbumType, PostType, UserType } from "./types";

// screens
import { Home } from "./screens/Home/Home";
import { Posts } from "./screens/Posts/Posts";
import { Albums } from "./screens/Albums/Albums";

export default function App({
  url,
  initialState,
}: {
  url: string;
  initialState: { users: UserType[]; posts: PostType[]; albums: AlbumType[] };
}) {
  return (
    <StaticRouter location={url}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={initialState.users}
              posts={initialState.posts}
              albums={initialState.albums}
            />
          }
        />
        <Route
          path="/posts/:userId"
          element={
            <Posts users={initialState.users} posts={initialState.posts} />
          }
        />
        <Route
          path="/albums/:userId"
          element={
            <Albums users={initialState.users} albums={initialState.albums} />
          }
        />
      </Routes>
    </StaticRouter>
  );
}
