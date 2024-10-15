const express=require('express')
const randumNumber = require('../Controllers/chartController')
const router=express.Router()

router.get('/radnum',randumNumber)

module.exports=router