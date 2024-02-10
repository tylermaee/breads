const express = require('express')
const router = express.Router()
const Bread = require('../models/bread.js')
const render = require('../render')

//Bread Routes
breads.get('/',(req, res) => {
    res.render('index')
    //res.send(Bread)
})

router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = router;



  