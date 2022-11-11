import { apiClient as ApiClient } from '../openapi/apiClient';

export const apiClient = new ApiClient({
  BASE: `http://34.27.241.199:3333` // TODO move to env
});
