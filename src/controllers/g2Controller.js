const User = require('../models/User');
const gController = require('./gController');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
let userData;

exports.G2_insert_post = async (req, res) => {
  const saltRounds = 10;
  const hashedLN = await bcrypt.hash(req.body.licenseNumber, saltRounds);
  const LNUid = crypto.createHash('sha256').update(req.body.licenseNumber).digest('hex');
  User.findOneAndUpdate({ username: req.body.username }, { ...req.body, licenseNumber: hashedLN, LNUid }, { new: true })
   .then(response => {
      gController.G_get_list({ body: { licenseNumber: response.licenseNumber } }, res)
      // gController.G_get_list()
    }).catch((err) => {
      res.render('g2', {items: {}, message: err.message.indexOf('E11000') > -1 ? 'License Number already found': ''})
    })
};

exports.G2_get_user = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((response) => {
      userData = response
      res.render('g2', { items: {}, message: '' });
    })
    .catch(err => console.log('errr', err));
};

exports.G2_get = (req, res) => {
  res.render('g2', { items: userData, message:'' })
}

