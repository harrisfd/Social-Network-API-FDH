const express =require("express")
const mongoose =require("mongoose")

const PORT=process.env.PORT || 3001
const app=express()

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialnet", {
    useNewUrlParser:true,
    useFindAndModify:false
})

app.use(require("./Routes/api"))

app.listen(PORT,()=>{
    console.log("server is started")
})
