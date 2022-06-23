const router = require('express').Router();
let Visitor = require('../models/visitor');

router.route('/add').post((req, res) => {
  const visitorname = req.body.visitorname;
  const phonenumber = req.body.phonenumber;

  const newVisitor = new Visitor({
    visitorname, 
    phonenumber,
    });

  newVisitor.save()
    .then(() => res.json('Thank you for your visit!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;