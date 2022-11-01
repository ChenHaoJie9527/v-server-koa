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
};

export { list, userInfo };
