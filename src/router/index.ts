import KoaRouter from "koa-router";
const router = new KoaRouter();
import { routers } from "./routers";
routers.forEach(({ method, path, controller }) => {
  //  router 第一个参数是 path， 后面跟上路由级中间件 controller（上面编写的路由处理函数）
  router[method](path, controller);
});

export { router };
