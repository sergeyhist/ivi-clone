import { IComment } from "../types/IComment";

export const mockComment: IComment = {
  comment_id: "4d522235-7915-4122-8303-4bc79ea603a5",
  title: "About film",
  text: "My comment about the film",
  like: "36",
  film_id: "eb5eb005-5818-4cee-9f7b-0fc6c1fae2cc",
  createdAt: "2023-05-08T07:30:59.761Z",
  updatedAt: "2023-05-08T07:30:59.761Z",
  user_id: "f7b2bc15-ea49-453e-a924-c0c32b21cee0",
  parent_id: null,
  user: {
    email: "admin@gmail.com",
    profile: {
      profile_id: "51ab6af9-0739-4384-8f52-f5cee6b7ca58",
      first_name: "Victor",
      last_name: "Barinov",
    },
  },
  sub_comments: [
    {
      comment_id: "ec2d35f8-b9de-4fa6-a906-c76b9f2ddaef",
      title: "About film",
      text: "My comment about the film",
      like: "36",
      film_id: "eb5eb005-5818-4cee-9f7b-0fc6c1fae2cc",
      createdAt: "2023-05-08T07:38:01.507Z",
      updatedAt: "2023-05-08T07:38:01.507Z",
      user_id: "f7b2bc15-ea49-453e-a924-c0c32b21cee0",
      parent_id: "4d522235-7915-4122-8303-4bc79ea603a5",
      user: {
        email: "admin@gmail.com",
        profile: {
          profile_id: "51ab6af9-0739-4384-8f52-f5cee6b7ca58",
          first_name: "Victor",
          last_name: "Barinov",
        },
      },
      sub_comments: [
        {
          comment_id: "4c786377-f586-4580-ab6e-24cb0ccd407e",
          title: "About film",
          text: "My comment about the film",
          like: "36",
          film_id: "eb5eb005-5818-4cee-9f7b-0fc6c1fae2cc",
          createdAt: "2023-05-08T07:38:20.229Z",
          updatedAt: "2023-05-08T07:38:20.229Z",
          user_id: "f7b2bc15-ea49-453e-a924-c0c32b21cee0",
          parent_id: "ec2d35f8-b9de-4fa6-a906-c76b9f2ddaef",
          user: {
            email: "admin@gmail.com",
            profile: {
              profile_id: "51ab6af9-0739-4384-8f52-f5cee6b7ca58",
              first_name: "Victor",
              last_name: "Barinov",
            },
          },
          sub_comments: [],
        },
      ],
    },
  ],
};
