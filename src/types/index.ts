import { z } from "zod";

// schemas
import { albumSchema, postSchema, userSchema } from "../schemas";

export type UserType = z.infer<typeof userSchema>;
export type PostType = z.infer<typeof postSchema>;
export type AlbumType = z.infer<typeof albumSchema>;
