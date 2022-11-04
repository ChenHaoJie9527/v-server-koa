import { Context, Next } from "koa";
export const compose = (middleware: any[]) => {
  // 写 lib 一定要记得对入参类型、边界等进行校验
  if (!Array.isArray(middleware)) {
    throw new TypeError("Middleware stack must be an array!");
  }
  for (let i = 0; i < middleware.length; i++) {
    if (typeof middleware[i] !== "function") {
      throw new TypeError("Middleware must be composed of functions!");
    }
  }
  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */
  // 返回的包装函数中间件
  // context =》 ctx 当前上下文 ctx 对象
  // next => 包装的promise中间件函数，第一次调用时候 next为undefined
  return function (context: any, next: Next) {
    // last called middleware #
    // 通过闭包用于记录中间件执行索引位置
    let index = -1;
    // 从 0 开始
    return dispatch(0);
    function dispatch(i: number) {
      // 锁 确保在一个中间件中next只调用一次 若是两次执行next()就会报出这个错误 将状态rejected
      if (i <= index)
        Promise.reject(new Error("next() called multiples times"));
      index = i;
      // fn 就是我们app.use()注册的中间件函数 取出数组中的中间件函数
      let fn = middleware[i];
      // 当满足 i === middleware.length 时，说明所有的中间件已经执行完毕了 此时 fn 等予 undefined 需要将其再赋值为 next 函数 即将匿名函数的第二个参数赋值给 fn
      if (i === middleware.length) fn = next;
      // 注意所有的返回都是通过promise包装处理的
      // 所以如何保证中间件处理顺序记得 await next()
      // 1.当fn为undefined时候，返回一个空的Promise，用于then回调
      if (!fn) Promise.resolve();

      try {
        // dispatch.bind(null, i + 1)) 就是我们中间件中的next函数
        // 一旦你await next()调用就会进入下一个中间件控制权 实现了洋葱模型
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        // 上面一行实际上等价于
        /*
        return Promise.resolve(fn(context, function () {
          return dispatch(i + 1)
        }))
        */
        // 所以koa中间件函数中的第二个参数 next实际上就是以下匿名函数：
        /*
        function () {
          return dispatch(i + 1)
        }
        */
        // 所以在中间件中执行到 await next() 这一句的时候 执行 匿名函数 调用并返回 dispatch函数 而 dispatch函数会返回 promise.resolve 值是下一个中间件匿名函数 
        // await next() => await dispatch(i + 1) => await Promise.resolve(middleware[i + 1])
      } catch (error) {
        // 异常处理
        return Promise.reject(error);
      }
    }
  };
};
