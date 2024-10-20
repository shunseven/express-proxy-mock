import {  NextFunction, Request, Response } from "express";
import { getApiData } from "./common/fetchJsonData";
import { matchRouter, parseUrlToKey } from "./common/fun";
import createProxyServer from "./proxy";
import createMock from "./mock";

export default function entry(options: ProxyMockOptions) {
  const proxyServer = createProxyServer(options);
  const mockFun = createMock();
  return (req: Request, res: Response, next: NextFunction): boolean => {
    if (matchRouter(options.apiRule, req.path)) {
      const apiData = getApiData();
      const key = parseUrlToKey(req.url);
      const apiConfig = apiData.apiList.find(item => item.key === key || parseUrlToKey(item.url) === key);
      if (apiConfig?.target === 'proxy' || !apiConfig) {
        // 走全局代理
        console.log(`${req.url} 代理 => ${apiData.selectProxy}`);
        proxyServer(req, res, next, {
          proxyUrl: apiData.selectProxy,
          ignorePath: false,
        });
      } else if (apiConfig?.target === 'mock') {
        // 走 mock 数据
        console.log(`${req.url} => mock数据`);
        mockFun(req, res, next)
      } else if (apiConfig?.target === 'customProxy') {
        // 走自定义代理
        console.log(`${req.url} 自定义代理 => ${apiConfig.selectCustomProxy}`);
        proxyServer(req, res, next, {
          proxyUrl: apiConfig.selectCustomProxy,
          ignorePath: false,
        });
      }
      return true;
    }
    return false;
  }
}