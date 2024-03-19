import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Posts } from "./screens/Posts/Posts";
import { Albums } from "./screens/Albums/Albums";
import { ApiProvider } from "./providers/ApiProvider/ApiProvider";
import { UsersProvider } from "./providers/UsersProviders/UsersProviders";

export default function App({ url }: { url: string }) {
  return (
    <ApiProvider>
      <UsersProvider>
        <MemoryRouter initialEntries={[url]}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/posts" Component={Posts} />
            <Route path="/albums" Component={Albums} />
          </Routes>
        </MemoryRouter>
      </UsersProvider>
    </ApiProvider>
  );
}
