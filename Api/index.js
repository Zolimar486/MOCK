const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const postRouter = require("./routers/post")

const app = express();
app.use(cors());
app.options("*", cors())
dotenv.config();
mongoose.set('strictQuery', false);




mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connecting Mongodb finally"))
.catch((err) => console.log(err))


const PORT = 5000;

//controlers Functions 

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended: true, limit:'50mb'}))
app.use('/api/post', postRouter)



app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`))