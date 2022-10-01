import { IItemNav } from "../Nav/Nav.types"; 

export interface IItemSubNav extends IItemNav {
  list?: IItemNav[];
}
