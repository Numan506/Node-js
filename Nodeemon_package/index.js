
const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{


const myFunction = (port,file)=>{
    fs.readFile(file,(err,data)=>{
        res.writeHead(port,{"Content-type": "text/html"});
        res.write(data);
        res.end();
    });
};




if (req.url=="/"){
        myFunction(200,"./views/index.html");
        
       
    }
else if (req.url==="/about"){
        myFunction(200,"./views/about.html");
        
    }

else if (req.url=="/contact"){
       myFunction(200,"./views/contact.html");
    }

else {
        myFunction(200,"./views/error.html");
    }
});


server.listen(port,hostname,()=>{
  console.log(`server is running sucessfully at http://${hostname}:${port}`)
})