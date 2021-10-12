const { v4: uuidv4 } = require('uuid');


let users=[]

const getUsers =(req,res)=>{
    res.send(users)
}

const postUser=(req,res)=>{
    const user = req.body;
    users.push({...user,id:uuidv4()});
   res.send(`Successfully add to the database`)
}

const getUser=(req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=>user.id==id)
    res.send(foundUser)
}

const deleteUser=()=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id!=id)
    res.send("Successfully")
}

const patchUser=(req,res)=>{
    const{id}=req.params
    const{FirstaName,LastName,Age}= req.body
    const user = users.find((user)=>user.id==id)
    if(FirstaName){
        user.FirstaName=FirstaName
    }
    if(LastName){
       user.LastName=LastName
   }
   if(Age){
       user.Age=Age
   }
   res.send(`${id} Patch is success`)
}



module.exports={
    postUser,
    getUsers,
    getUser,
    deleteUser,
    patchUser
}