import KoaRouter from "koa-router";
const router = new KoaRouter();
import { CONST_TYPE } from "@/constants";

router.get(CONST_TYPE.path_a, async (ctx) => {
  ctx.body = "a";
});

router.get(CONST_TYPE.path_b, async (ctx) => {
  ctx.body = "b";
});

router.get(CONST_TYPE.path_c, async (ctx) => {
  ctx.body = "c";
});

export { router };
