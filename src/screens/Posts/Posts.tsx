import React, { FunctionComponent, useState } from "react";
import { Helmet } from "react-helmet";

export const Posts: FunctionComponent = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Helmet>
        <title>Posts Page</title>
        <meta name="description" content="This is the Posts page of my app" />
      </Helmet>
      <div>
        <h1>Posts!</h1>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
};
