import React, { FunctionComponent, useMemo } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

// types
import { AlbumType, UserType } from "../../types";

type AlbumsProps = {
  users: UserType[];
  albums: AlbumType[];
};

export const Albums: FunctionComponent<AlbumsProps> = ({ users, albums }) => {
  const { userId } = useParams();
  const selectUser = useMemo(
    () =>
      userId ? users.find((user) => user.id === Number(userId)) || null : null,
    [userId, users]
  );
  const userAlbums = useMemo(
    () =>
      userId ? albums.filter((album) => album.userId === Number(userId)) : [],
    [userId, albums]
  );

  return (
    <>
      <Helmet>
        <title>Albums user: {selectUser?.name}</title>
        <meta
          name={`Albums user: ${selectUser?.name}`}
          content={`Albums user: ${selectUser?.name}`}
        />
      </Helmet>
      <div className={"container"}>
        <h1>Albums user: {selectUser?.name}</h1>
        <div className={"list"}>
          {userAlbums.map((userAlbum, index) => {
            return (
              <div
                key={`post-${userAlbum.id}-user-${userId}`}
                className={"item"}
              >
                #{index + 1}. {userAlbum.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
