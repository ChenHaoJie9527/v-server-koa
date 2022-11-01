import Koa from "koa";
const app = new Koa();
import { MDlist } from "@/middleware";
import utils from "@/utils";

const compose = require("koa-compose");

const port = "8002";
const host = "0.0.0.0";

app.context.utils = utils;
app.use(compose(MDlist));

app.listen(port, 0, () => {
  console.log(`API server listening on ${host}:${port}`);
});
