import { test } from "@/constroller";
import { Context } from "koa";

export type Routers = {
  method: "get";
  path: string;
  controller: (ctx: Context) => Promise<void>;
}[];

export const routers: Routers = [
  {
    method: "get",
    path: "/a",
    controller: test.list,
  },
];
