const express = require('express'),
router = express.Router();

router.get('/', (req, res) => {
    res.json("welcome to my favortie food blog").status(200)
})

module.exports = router;