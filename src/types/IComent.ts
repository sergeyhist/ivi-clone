export interface IComment {
  id: number;
  author: string;
  text: string;
  date: string;
  replies?: IComment[];
}
