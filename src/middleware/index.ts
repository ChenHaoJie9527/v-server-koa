import { router } from "@/router";

/**
 * 路由处理
 */
const mdRoute = router.routes();
/*
    原先当路由存在，请求方式不匹配的时候，会报 404，
    加了这个中间件，会报请求方式不被允许
*/
const mdRouterAllowed = router.allowedMethods();

export const MDlist = [mdRoute, mdRouterAllowed];
