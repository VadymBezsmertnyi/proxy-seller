import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

export const Home: FunctionComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the home page of my app" />
      </Helmet>
      <h1>Welcome to my app!</h1>
    </div>
  );
};
