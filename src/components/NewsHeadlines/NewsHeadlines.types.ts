import { INewsPreview } from 'components/NewsPreview/NewsPreview.types';

export type NewsHeadlinesProps = {
  data: INewsPreview[];
  newsPerPage: number;
};
