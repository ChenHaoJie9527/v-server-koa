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

const test = async (ctx: Context) => {
  ctx.body = {
    status: 500,
    message: "failed",
    data: {
      list: null,
    },
  };
  
};

const getUserInfo = async (ctx: Context) => {
  ctx.body = {
    status: 200,
    data: {}
  }
};

export { list, test, getUserInfo };
