import { test } from "@/constroller";
import { Context } from "koa";

export type Routers = {
  method: "get" | "post";
  path: string;
  controller: (ctx: Context) => Promise<any>;
}[];

export const routers: Routers = [
  {
    method: "get",
    path: "/a",
    controller: test.list,
  },
  {
    method: "post",
    path: "/test",
    controller: test.userInfo,
  },
];
