import { apiClient as ApiClient } from '../openapi/apiClient';

export const apiClient = new ApiClient({
  BASE: '//localhost:3333' // TODO move to env
});
