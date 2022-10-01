import { INewsPreview } from 'components/NewsPreview/NewsPreview.types';

export type NewsListProps = {
  data: INewsPreview[];
  newsPerPage: number;
  currentPage: number;
  query?: string;
};
