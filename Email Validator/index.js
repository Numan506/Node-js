const app = require("./app")
const Port = 3002;





app.listen(Port,()=>{
  console.log(`Server is running at http://localhost:${Port}`)
})