import { IComment } from "../types/IComment";

export const comments: IComment[] = [
  {
    title: "About film",
    text: "My comment about the film",
    film_id: "984fdb2d-da0c-4e04-926a-f72f103c4ccb",
    parent_id: "comment_id for sub_comment or null for comment",
    user_id: 1,
  },
];
