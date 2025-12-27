import type { HelloResponse } from 'shared-types';

export const fetch = (): HelloResponse => {
  return { message: 'hello world' };
};
