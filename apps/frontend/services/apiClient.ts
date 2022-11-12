import { apiClient as ApiClient } from '../openapi/apiClient';

export const apiClient = new ApiClient({
  BASE: `http://34.173.243.226:3333` // TODO move to env
});
