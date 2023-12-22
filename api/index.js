import express from "express";
//Routes
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

const PORT = 8000;

const app = express();
app.use(express.json())

app.use('/api/posts', postRoutes);

app.use('/api/user', userRoutes);

app.use('/api/auth', authRoutes)

// app.get('/test',(req,res)=>{
//     res.send("am from backend response")
// })

app.listen(PORT, ()=>{
    console.log(`Server is running in ${PORT}`)
})                                     


