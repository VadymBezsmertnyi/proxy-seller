import { z } from "zod";
import { albumSchema, postSchema, userSchema } from "../scremas";

export type UserType = z.infer<typeof userSchema>;
export type PostType = z.infer<typeof postSchema>;
export type AlbumType = z.infer<typeof albumSchema>;
