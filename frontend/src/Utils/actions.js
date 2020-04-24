import axios from 'axios';
import { BASE_URL, ROUTES } from '../config/endPoints';

export const getValues = async () => {
  const res = await axios.get(`http://${BASE_URL}${ROUTES.GET_VALUES}`);
  const { status, data } = res;
  if (status === 200) {
    return data;
  }

  return { error: true, message: 'Error' };
};

export const getValuesByKey = async (id) => {
  const res = await axios.get(`${BASE_URL}${ROUTES.GET_VALUE_BY_ID.replace(':id', id)}`);
  const { status, data } = res;
  if (status === 200) {
    return data;
  }

  return { error: true, message: 'Error' };
};
