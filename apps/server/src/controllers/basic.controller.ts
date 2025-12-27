import { RequestHandler } from 'express';
import * as basicService from '@/services/basic.service';
import { HelloResponse } from 'shared-types';

export const getHello: RequestHandler = (_req, res) => {
  const data: HelloResponse = basicService.fetch();
  return res.status(200).json(data);
};
