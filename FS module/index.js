const fs = require("fs");
//......... How to Write file...........
fs.appendFile("numan.txt","My name is Numan.I lives in Dhaka",(err)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log("successful");
      }
})


//......... How to Read file...........

/* fs.readFile("numan.txt","utf-8",(data,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
*/

//......... How to Rename file...........

 /* fs.rename("numan.txt","numan2.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("sucessfull");
    }
})
*/

//......... How to Delete file...........

/* fs.unlink("numan2.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("sucessfull");
    }
})
*/