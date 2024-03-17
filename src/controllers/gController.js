const User = require('../models/User');
let userData;

exports.G_get_list = (req, res) => {
  const query = req.body.licenseNumber ? { licenseNumber: req.body.licenseNumber } : { username: req.body.username }
  User.findOne(query)
    .then((response) => {
      if (response) {
        userData = response
        res.render('g', { items: response });
      } else {
        res.render('g', { items: 'No user found, please give valid license number' });
      }
    })
    .catch(err => console.log('errr', err));
};

exports.G_update_list = (req, res) => {
  User.updateOne(
    { licenseNumber: req.body.licenseNumber },
    { $set: { carDetails: req.body['carDetails'] } }
  ).then(response => {
    this.G_get_list({ body: { licenseNumber: req.body.licenseNumber } }, res)
  })
}

exports.G_get = (req, res) => res.render('g', { items: userData })

