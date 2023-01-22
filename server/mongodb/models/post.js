import mongoose from "mongoose";

//creating modal (structure) for our posts

//schema
const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

//model out of that schema
const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
