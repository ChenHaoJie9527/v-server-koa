import Koa from "koa";
const app = new Koa();
import { MDlist } from "@/middleware";
const compose = require("koa-compose");

const port = "8002";
const host = "0.0.0.0";

app.use(compose(MDlist));

app.listen(port, 0, () => {
  console.log(`API server listening on ${host}:${port}`);
});
