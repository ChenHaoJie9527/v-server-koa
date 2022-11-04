// Mongoose 中的一切都以 Schema 开始。每个模式映射到一个 MongoDB 集合并定义该集合中文档的形状。
import mongoose from "mongoose";
const { Schema } = mongoose;
export const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  meta: {
    votes: Number,
    favs: Number,
  },
  list: [
    {
      body: String,
      date: Date,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

// add: 可以添加其他键
// blogSchema.add

// 标识 _id 默认情况下，Mongoose 会_id向您的模式添加一个属性。 // ObjectId { ... }
// blogSchema.path("_id");
