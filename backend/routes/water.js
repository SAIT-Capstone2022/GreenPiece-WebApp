const Water = require('../models/water');
const router = require('express').Router();


router.post("/water", async (req, res) => {
 
    let water;
    water = await new Water({ ...req.body}).save();
    res.status(201);

});

module.exports = router;