/**
 * Created by seven on 16/3/18.
 */
/// <reference path="./types/global.d.ts" />
import {  NextFunction, Request, Response } from 'express';
import clientEntry from './clientEntry';
import entry from './mockProxy/entry';
import events from 'events';
import viewRequest from './mockProxy/viewRequest';

events.EventEmitter.defaultMaxListeners = 20;

const defaultConfig: ProxyMockOptions = {
  apiRule: '/api/*',
  https: true,
  cacheRequestHistoryMaxLen: 30,
  configPath: '/config',
}

export function proxyMockMiddleware(options: ProxyMockOptions = defaultConfig) {
  const config = Object.assign({}, defaultConfig, options);
  const entryMiddleware = entry(config);
  const clientMiddleware = clientEntry(config);
  return function (req: Request, res: Response, next: NextFunction) {
    console.log(22222, req.path)
    const isClient = clientMiddleware(req, res)
    const isViews = viewRequest(req, res);
    const isProxyMock =entryMiddleware(req, res, next);
    if (!isClient && !isViews && !isProxyMock) {
      next();
    }
  }
}

export default proxyMockMiddleware;