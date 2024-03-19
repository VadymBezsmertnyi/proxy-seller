import React, { FunctionComponent, useMemo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

// types
import { PostType, UserType } from "../../types";

type PostsProps = {
  users: UserType[];
  posts: PostType[];
};

export const Posts: FunctionComponent<PostsProps> = ({ users, posts }) => {
  const { userId } = useParams();
  const selectUser = useMemo(
    () =>
      userId ? users.find((user) => user.id === Number(userId)) || null : null,
    [userId, users]
  );
  const userPosts = useMemo(
    () =>
      userId ? posts.filter((post) => post.userId === Number(userId)) : [],
    [userId, posts]
  );

  return (
    <>
      <Helmet>
        <title>Posts user: {selectUser?.name}</title>
        <meta
          name={`Posts user: ${selectUser?.name}`}
          content={`Posts user: ${selectUser?.name}`}
        />
      </Helmet>
      <div className={"container"}>
        <h1>Posts user: {selectUser?.name}</h1>
        <div className={"list"}>
          {userPosts.map((userPost, index) => {
            return (
              <div
                key={`post-${userPost.id}-user-${userId}`}
                className={"item"}
              >
                #{index + 1}. {userPost.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
