/* interface ISelectorItem {
    id: number;
    value: string
}

export interface ISelector {
    title: string;
    list: ISelectorItem[]
} */

export type SelectorProps = {
    id: number;
    value: string | number;
  }