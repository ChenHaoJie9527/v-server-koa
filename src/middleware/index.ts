import { router } from "@/router";
import KoaBodyParse from "koa-bodyparser";
import formidable from "./formidable";

const mdFormidable = formidable();
const koaBody = KoaBodyParse({
  enableTypes: ["json", "form", "text", "xml"],
  formLimit: "56kb",
  jsonLimit: "1mb",
  textLimit: "1mb",
  xmlLimit: "1mb",
  strict: true,
});

/**
 * 路由处理
 */
const mdRoute = router.routes();
/*
    原先当路由存在，请求方式不匹配的时候，会报 404，
    加了这个中间件，会报请求方式不被允许
*/
const mdRouterAllowed = router.allowedMethods();

export const MDlist = [mdFormidable, koaBody, mdRoute, mdRouterAllowed];
