import { Context } from "koa";
interface Response {
  status: number;
  message: string;
  data: null | Record<string, any>;
}
const list = async (ctx: Context) => {
  ctx.body = {
    status: 200,
    message: "susses",
    data: {
      list: [1, 2, 3],
    },
  };
};

const userInfo = async (ctx: Context): Promise<Response> => {
  console.log("ctx.body", ctx.request.req);
  ctx.body = ctx.request.req;
  return {
    status: 400,
    message: "Not 400",
    data: null,
  };
};

export { list, userInfo };
