const router=require("express").Router()
const userroutes=require("./user-routes")
const thoughtroutes=require("./thought-routes")

router.use("/api/users", userroutes)
router.use("/api/thoughts", thoughtroutes)

module.exports=router