const express = require('express')
const router = express.Router()
const User = require('../models/User')

const Joi = require('@hapi/joi')

const valSchema = {
    name: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(10).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
}

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router