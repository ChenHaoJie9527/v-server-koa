import Koa from "koa";
const app = new Koa();
import { MDlist } from "@/middleware";
import utils from "@/utils";

const compose = require("koa-compose");

const port = "8002";
const host = "0.0.0.0";

app.context.utils = utils;
app.use(compose(MDlist));

// Koa 错误处理机制
app.on("error", (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`,
    };
  }
});

app.listen(port, 0, () => {
  console.log(`API server listening on ${host}:${port}`);
});
