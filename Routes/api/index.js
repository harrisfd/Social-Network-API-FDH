const router=require("express").Router()
const userroutes=require("./user-routes")

router.use("/api/users", userroutes)


module.exports=router