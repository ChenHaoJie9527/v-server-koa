import Koa from "koa";
const app = new Koa();
import { router } from "@/router";

const port = "8002";
const host = "0.0.0.0";

app.use(router.routes());

/*
    原先当路由存在，请求方式不匹配的时候，会报 404，
    加了这个中间件，会报请求方式不被允许
*/
app.use(router.allowedMethods());

app.listen(port, 0, () => {
  console.log(`API server listening on ${host}:${port}`);
});
