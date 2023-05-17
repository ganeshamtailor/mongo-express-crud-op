const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
      user: String,
      content: String,
      votes: Number
    }]
  });
  
const Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog;
