import express from "express";

//Routes
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

const PORT = 8000;
//Creating instance for the express
const app = express();
app.use(express.json())
//Routes
app.use('/posts', postRoutes);

app.use('/users', userRoutes);

app.use('/auth', authRoutes)

// app.get('/test',(req,res)=>{
//     res.send("am from backend response")
// })

//Server is running in 8000 port

app.listen(PORT, ()=>{
    console.log(`Server is running in ${PORT}`)
})                                     


