const app = require("./app")

//------------------PORT-----------------

const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
dotenv.config({path:"./Backend/config/config.env"})
PORT = process.env.PORT

//-----------------connect to database-------------------
DB = process.env.db_con
mongoose.connect(DB,()=>{
    console.log("Database connected")
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})