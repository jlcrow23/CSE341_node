const express = require('express');
const router = new express.Router();

// router.get('/', (req, res) => {res.send("Hello World!")});

router.use('/users', require('./users'))

module.exports = router;