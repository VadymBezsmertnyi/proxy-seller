import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Posts } from "./screens/Posts/Posts";
import { Albums } from "./screens/Albums/Albums";

export default function App({ url }) {
  return (
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/posts" Component={Posts} />
        <Route path="/albums" Component={Albums} />
      </Routes>
    </MemoryRouter>
  );
}
