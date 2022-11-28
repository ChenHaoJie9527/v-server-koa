import { Context } from "koa";

const list = async (ctx: Context) => {
  console.log("ctx.request", ctx);
  ctx.body = {
    status: 200,
    message: "susses",
    data: {
      list: [1, 2, 3],
    },
  };
};

const test = async (ctx: Context) => {
  ctx.body = ctx.request.body;
  // const data = "";
  // ctx.utils.assert(data, ctx.utils.throwError(10001, "验证码失效", "error"));
};

const getUserInfo = async (ctx: Context) => {
  const { name, age } = ctx.query;
  if (name === "user" && age === "18") {
    ctx.body = {
      status: 200,
      data: {},
      message: "susses",
      error: null,
    };
    return;
  }
  ctx.body = {};
};

const pathswer = async (ctx: Context) => {
  ctx.body = "hello";
};

export { list, test, getUserInfo, pathswer };
