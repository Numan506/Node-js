const express = require("express")
const app= express()
const userRouter = require("./routes/users")

app.use("/users",userRouter)

app.get("/",(req,res)=>{
  res.send("This is a Home Page")
})

app.use((req,res)=>{
    res.send("<h2>404 ! page not found</h2>")
  })
  

module.exports =app