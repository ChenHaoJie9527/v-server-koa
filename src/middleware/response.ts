// 统一返回格式 工具函数
export const response = () => {
  return async (ctx: any, next: any) => {
    ctx.res.fail = ({ code = 500, data = {}, msg = 'error', status = '' }) => {
      ctx.body = {
        code,
        data,
        msg,
        status,
      };
    };
    ctx.res.success = (msg = "success") => {
      ctx.body = {
        code: 0,
        data: ctx.body,
        msg: msg,
      };
    };
    await next();
  };
};
