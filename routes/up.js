const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruits')
router.post('/add-fruit-img', (req, res, next) => {
    const fruit = new Fruit(req.body);

    fruit.save()
    .then((txt) => res.json(txt))
    
    .catch(next)

})




module.exports = router;