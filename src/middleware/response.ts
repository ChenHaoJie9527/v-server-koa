// 统一返回格式 工具函数
export const response = () => {
  return async (ctx: any, next: any) => {
    // 错误处理
    ctx.res.fail = ({ code = 500, data = {}, msg = "error", status = "" }) => {
      ctx.body = {
        code,
        data,
        msg,
        status,
      };
    };
    // 成功处理 统一返回格式
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
