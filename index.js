const express = require('express')
const bodyParser= require('body-parser')
const { default: mongoose } = require('mongoose')
const User = require('./app/models/user')
const Blog = require('./app/models/blog')
const app = express()


app.use(bodyParser.json())
mongoose.connect('mongodb://127.0.0.1:27017/myApp',{useUnifiedTopology: true}).then(() =>console.log('connected')).catch((err) => console.log(err));

app.get('/hello-world',(req, res) => {
    res.send('hello world')
})

app.post('/new-request',(req,res)=>{
    res.send(req.body)
})
// to create

// app.post('/users', async (req,res)=>{
//     let user= await User.create(
//         {
//             firstName: "Harris",
//             lastName: "sadad",
//             email: "hsadad@gmail.com",
//         })
//     res.send(user)
// })

app.post('/blogs', async (req,res)=>{
    let blog= await Blog.create({
        title: 'Awesome Post 3!',
        slug: 'awesome-post 3',
        published: true,
        content: 'This is the best post ever',
        tags: ['featured', 'announcement'],
      })
    res.send(blog)
})

// To update
app.put('/blogs', async (req,res)=>{
    const blog = await Blog.findById("6464712bd49bc2a0fd04d5f2")
    blog.title = "The Most Awesomest Post!!";
    await blog.save();
    res.send(blog)
})

//to delete
app.delete('/blogs', async (req,res)=>{
    const blog = await Blog.deleteOne({_id: "646479e3bc1a49fe2b5b5582"})
    res.send(blog)
})

// to show
app.get('/blogs', async (req,res)=>{
    const blog = await Blog.findById({_id: "6464796e20bd963bda3d89b7"})
    res.send(blog)
})


app.listen('3300', ()=>{
    console.log('listen at 3300')
})