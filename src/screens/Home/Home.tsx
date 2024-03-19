import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

// types
import { AlbumType, PostType, UserType } from "../../types";

// components
import { UserList } from "../../components/UserList";

type HomeProps = {
  users: UserType[];
  posts: PostType[];
  albums: AlbumType[];
};

export const Home: FunctionComponent<HomeProps> = ({
  users,
  posts,
  albums,
}) => {
  return (
    <div>
      <Helmet>
        <title>List users</title>
        <meta name="List users" content="This is the list users page" />
      </Helmet>
      <h1 className="main-title">Users list</h1>
      <div className={"list-users"}>
        {users.map((user, index) => (
          <UserList
            key={`user-${user.id}`}
            number={index + 1}
            user={user}
            posts={posts}
            albums={albums}
          />
        ))}
      </div>
    </div>
  );
};
