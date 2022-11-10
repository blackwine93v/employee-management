import { apiClient as ApiClient } from '../openapi/apiClient';

export const apiClient = new ApiClient({
  BASE: `http://104.155.128.186:3333` // TODO move to env
});
