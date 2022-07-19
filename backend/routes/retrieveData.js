const router = require('express').Router();
const { sensorData } = require('../models/sensorData');

router.post("/getSensorData", async (req, res) => {

    console.log("bawitdaba")

    const usersData = await sensorData.find({ email: req.params.email });

    if (!usersData) return res.status(400).send({ message: "No data for this user yet!" });

    res.status(200).send({ UsersData: usersData });

});

module.exports = router;
