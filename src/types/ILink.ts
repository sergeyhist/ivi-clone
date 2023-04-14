import {ReactNode} from "react";

export default interface ILink {
  text: string | ReactNode;
  url: string;
  target?: string;
}
