// 封装一些工具函数
import { blogSchema } from "./schema";

export function addSchemaKey(key: string, value: any) {
  return blogSchema.add({
    name: "string",
    color: "string",
    price: "number",
  });
}