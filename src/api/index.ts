import axios from "axios";
import { AlbumType, PostType, UserType } from "../types";

export const fetchDataUsers = async () => {
  try {
    const response = await axios.get<UserType[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const fetchDataPosts = async () => {
  try {
    const response = await axios.get<PostType[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const fetchDataAlbums = async () => {
  try {
    const response = await axios.get<AlbumType[]>(
      "https://jsonplaceholder.typicode.com/albums"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
