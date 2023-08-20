import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    desc: {
      type: String,
      unique: true,
    },
    img: {
      type: String,
      unique: true,
    },
    content: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
