const express = require('express')
const router = express.Router()
const path = require('path')
// const logger= require("../services/logger")
// const logEvents= require("../middlerware/logger")

router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})

module.exports = router