// create model
import mongoose from "mongoose";
import { blogSchema } from "./schema";

// blogSchema的模式转换为 我们可以使用的数据模型
export const Blog = mongoose.model('blog', blogSchema);

// 当您使用自动添加的 _id属性创建新文档时，Mongoose 会为您的文档创建一个新_id的 ObjectId 类型 。
const blogDB = new Blog();
// blogDB._id instanceof mongoose.Types.ObjectId // true

