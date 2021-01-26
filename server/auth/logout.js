require('dotenv').config();
const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
    res.clearCookie('socialtoken').json({message: 'Logout success'})
})

module.exports = router 