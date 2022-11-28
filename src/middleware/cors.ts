import cors from "@koa/cors";

/**
 * 跨域处理
 */
const Cors = cors({
  origin: "*",
  credentials: true,
  allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
});

export { Cors };
