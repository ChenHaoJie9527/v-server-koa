import { router } from "@/router";
import KoaBodyParse from "koa-bodyparser";
import formidable from "./formidable";
import { response } from "./response";
import { error } from "./error";
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

/**
 * 统一返回格式
 */
const mdResHandler = response();

/**
 * 错误处理
 */
const mdErrorHandler = error();

/*
    原先当路由存在，请求方式不匹配的时候，会报 404，
    加了这个中间件，会报请求方式不被允许
*/
const mdRouterAllowed = router.allowedMethods();

export const MDlist = [
  mdRoute,
  mdFormidable,
  koaBody,
  mdResHandler,
  mdErrorHandler,
  mdRouterAllowed,
];
