const express = require("express");
const router = express.Router();
const {postUser,getUsers,getUser,deleteUser,patchUser} = require("../Controlers/users")


var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get("/",getUsers)

router.post("/",postUser)
   
router.get("/:id",getUser)

 router.delete("/:id",deleteUser)

 router.patch("/:id",patchUser)

 
module.exports=router;