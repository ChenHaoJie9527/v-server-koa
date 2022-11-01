import { Context } from "koa";
const list = async (ctx: Context) => {
  ctx.body = "路由改造的结果";
};

export { list };
