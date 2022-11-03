import { Context, Next } from "koa";
export const compose = (middleware: any[]) => {
  // 写 lib 一定要记得对入参类型、边界等进行校验
  if (!Array.isArray(middleware)) {
    throw new TypeError("Middleware stack must be an array!");
  }
  for (let i = 0; i < middleware.length; i++) {
    if (typeof i !== "function") {
      throw new TypeError("Middleware must be composed of functions!");
    }
  }
  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */
  // 返回的包装函数中间件
  // context =》 ctx
  // next => 包装的promise中间件函数，第一次调用时候 next为undefined
  return function (context: Context, next: Next) {
    // last called middleware #
    // 通过闭包用于记录中间件执行索引位置
    let index = -1;
    // 从 0 开始
    return dispatch(0);
    function dispatch(i: number) {
      // 锁
      if (i <= index)
        Promise.reject(new Error("next() called multiples times"));
      index = i;
      // fn 就是我们app.use()注册的中间件函数
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      // 注意所有的返回都是通过promise包装处理的
      // 所以我们如何要保证中间件处理顺序记得 await next()

      // 1.当fn为undefined时候，返回一个空的Promise，用于then回调
      if (!fn) Promise.resolve();

      try {
        // dispatch.bind(null, i + 1)) 就是我们中间件中的next函数
        // 一旦你await next()调用就会进入下一个中间件控制权 实现了洋葱模型
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (error) {
        // 异常处理
        return Promise.reject(error);
      }
    }
  };
};
