import { apiClient as ApiClient } from '../openapi/apiClient';

export const apiClient = new ApiClient({
  BASE: `http://104.154.93.62:3333` // TODO move to env
});
