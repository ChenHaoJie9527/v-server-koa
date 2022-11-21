import log4js from "log4js";
import { Context, Next } from "koa";
const pwd = process.cwd();
const paths = {
  //  临时文件存放地址
  tempFilePath: `${pwd}/app/public/temp`,
  logConfig: {
    flag: true,
    outDir: `${pwd}/app/public/log`,
    level: "info",
  },
};

log4js.configure({
  appenders: {
    cheese: { type: "file", filename: `${paths.logConfig.outDir}/receive.log` },
  },
  categories: { default: { appenders: ["cheese"], level: "info" } },
  pm2: true,
});

const logger = log4js.getLogger();

logger.level = paths.logConfig.level;

export default () => {
  return async (ctx: Context, next: Next) => {
    const { method, path, origin, query, body, headers, ip } = ctx;
    const data: Record<string, any> = {
      method,
      path,
      origin,
      query,
      body,
      ip,
      headers,
    };
    await next();
    if (paths.logConfig.flag) {
      const { status, params } = ctx;
      data.status = status;
      data.params = params;
      data.result = ctx.body || "no content";
      if ((ctx.body as any).code !== 0) {
        logger.error(JSON.stringify(data));
      } else {
        logger.info(JSON.stringify(data));
      }
    }
  };
};
