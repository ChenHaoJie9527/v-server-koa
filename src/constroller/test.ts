import { Context } from "koa";

const list = async (ctx: Context) => {
  ctx.body = {
    status: 200,
    message: "susses",
    data: {
      list: [1, 2, 3],
    },
  };
};

const userInfo = async (ctx: Context) => {
  ctx.body = ctx.request.body;
  // const data = "";
  // ctx.utils.assert(data, ctx.utils.throwError(10001, "验证码失效", 'error'));
  // ctx.body = "返回结果";
};

export { list, userInfo };
