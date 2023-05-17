export interface IComment {
  comment_id: string;
  title: string;
  text: string;
  like: string;
  film_id: string;
  createdAt: string;
  updatedAt: string;
  user_id: string;
  parent_id: string | null;
  user: User;
  sub_comments: IComment[];
}

export interface User {
  email: string;
  profile: Profile;
}

export interface Profile {
  profile_id: string;
  first_name: string;
  last_name: string;
}
