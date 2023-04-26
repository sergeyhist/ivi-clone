export interface IComment{
  id: number
  author: string
  text: string,
  replies?: IComment[]
}