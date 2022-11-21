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
    path: "/list",
    controller: test.list,
  },
  {
    method: "post",
    path: "/test",
    controller: test.test,
  },
  {
    method: "get",
    path: "/user",
    controller: test.getUserInfo,
  },
];
