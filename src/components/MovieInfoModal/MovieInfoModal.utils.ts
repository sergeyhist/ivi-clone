import {IComment} from "/src/types/IComment";

export type InfoTabs = "actors" | "comments";

export const comments: IComment[] = [
  {
    id: 1,
    author: "Sakata",
    text: "Комментарий 1",
    replies: [
      {
        id: 2,
        author: "Yuki",
        text: "Ответ на комментарий 1",
      },
      {
        id: 3,
        author: "Kazuma",
        text: "Еще один ответ на комментарий 1",
        replies: [
          {
            id: 4,
            author: "Misato",
            text: "Ответ на ответ на комментарий 1",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    author: "Kagura",
    text: "Комментарий 2",
    replies: [
      {
        id: 6,
        author: "Levi",
        text: "Ответ на комментарий 2"
      }
    ]
  },
];