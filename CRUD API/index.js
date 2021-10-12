const app =require('./app')
const Port=3001

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.listen(Port,()=>{
    console.log(`Server is running at http://localhost:${Port} `)
})