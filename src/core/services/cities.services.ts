import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { SelectorProps } from 'components/UI/SSelector/SSelector.types';

const mock = new MockAdapter(axios);
mock.onGet('/cities').reply(200, [
  { id: 1, value: 'Минск' },
  { id: 2, value: 'Гомель' },
  { id: 3, value: 'Брест' },
  { id: 4, value: 'Витебск' },
  { id: 5, value: 'Гродно' },
  { id: 6, value: 'Могилев' },
]);

export const getCities = async (): Promise<SelectorProps[]> => {
  try {
    const response = await axios.get('/cities');
    return response.data;
  } catch (error) {
    alert(error);
  }
};
