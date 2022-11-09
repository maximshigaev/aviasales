// Constants
import { BASE_URL } from './constants';

export const api = {
  search: {
    fetchCities: () => fetch(`${BASE_URL}/cities`),
  },
}
