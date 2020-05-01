const router = require('express').Router();
let Details = require('../models/details.model');

router.route('/').get((req, res) => {
  Details.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const contact = Number(req.body.contact);
  const address = req.body.address;
  const pincode = Number(req.body.pincode);

  const newUser = new Details({
    name,
    contact,
    address,
    pincode,
  });

  newUser.save()
  .then(() => res.json('Request Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:contact').delete((req, res) => {
    Details.findOneAndDelete(req.params.contact)
    .then(() => res.json('Pickup Removed'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;