import React, { FunctionComponent, useMemo } from "react";
import { AlbumType, PostType, UserType } from "../types";
import { Link } from "react-router-dom";

type UserListProps = {
  number: number;
  user: UserType;
  posts: PostType[];
  albums: AlbumType[];
};
export const UserList: FunctionComponent<UserListProps> = ({
  number,
  user,
  posts,
  albums,
}) => {
  const amountPosts = useMemo(
    () => posts.filter((post) => post.userId === user.id).length,
    [user.id, posts]
  );
  const amountAlbums = useMemo(
    () => albums.filter((album) => album.userId === user.id).length,
    [user.id, albums]
  );
  return (
    <div className={"item-user"}>
      <div className={"item-user-part title"}>
        <div>#{number}. </div>
        <div>{user.name}</div>
      </div>
      <div className={"item-user-part"}>
        <Link to={`/posts/${user.id}`} className={"link"}>
          Posts: {amountPosts}
        </Link>
        <Link to={`/albums/${user.id}`} className={"link link-album"}>
          Albums: {amountAlbums}
        </Link>
      </div>
    </div>
  );
};
