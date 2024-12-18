import express from 'express'
import {addUser,viewUser,updateUser,deleteUser} from '../controller/userController.js'


const  router=express.Router()

router.get("/addUser",addUser)
router.get("/viewUser",viewUser)
router.get("/updateUser",updateUser)
router.get("/deleteUser",deleteUser)

export default router