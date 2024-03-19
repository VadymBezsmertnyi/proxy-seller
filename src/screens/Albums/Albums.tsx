import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

export const Albums: FunctionComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Albums Page</title>
        <meta name="description" content="This is the Albums page of my app" />
      </Helmet>
      <h1>Albums!</h1>
    </div>
  );
};
