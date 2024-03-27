const express = require('express')
const router = express.Router()
const {Register} = require('../models')


router.get('/', async (req,res) =>{
    const getAllRegister = await Register.findAll()
    res.status(200).json(getAllRegister)
})

router.post("/", async (req,res) =>{
    const post = req.body
    await Register.create(post)
    res.json(post)

})







module.exports = router