// 解析上传文件
import Formidable from "formidable";
import { Context, Next, Request } from "koa";
import maps from "@/config";
export default function () {
  return async function (ctx: Context, next: Next) {
    if (ctx.url === "/test" && ctx.method === "POST") {
      const form = Formidable({
        multiples: true,
        //  上传的临时文件保存路径
        uploadDir: `${maps.tempFilePath}`,
      });
      await new Promise((resolve, reject) => {
        form.parse(ctx.req, (err, fields, files) => {
          if (err) {
            reject(err);
          } else {
            ctx.request.body = fields;
            // (ctx.request as Request & { files: any }).files = files;
            resolve(true);
          }
        });
      });
      await next();
    }
  };
}
