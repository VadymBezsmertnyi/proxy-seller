import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

export const Posts: FunctionComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Posts Page</title>
        <meta name="description" content="This is the Posts page of my app" />
      </Helmet>
      <div>
        <h1>Posts!</h1>
      </div>
    </div>
  );
};
