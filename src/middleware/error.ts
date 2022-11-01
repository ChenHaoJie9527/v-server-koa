export const error = () => {
  return async (ctx: any, next: any) => {
    try {
      await next();
      if (ctx.status === 200) {
        ctx.res.success();
      }
    } catch (err: any) {
      if (err.code) {
        // 自己主动抛出的错误
        ctx.res.fail({ code: err.code, msg: err.message, status: err.success });
      } else {
        // 程序运行时的错误
        ctx.app.emit("error", err, ctx);
      }
    }
  };
};
