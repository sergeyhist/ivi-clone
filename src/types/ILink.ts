import {ReactNode} from "react";

export default interface ILink {
  content: string | ReactNode;
  url: string;
  target?: string;
}
