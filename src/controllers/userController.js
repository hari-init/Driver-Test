const User = require('../models/User');
const bcrypt = require('bcrypt');


exports.signUp = async (req, res) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        
        const user = new User({...req.body, password: hashedPassword});
        user.save()
          .then((response) => {
            res.send({key:'done'})
        })
          .catch(err => {
            res.send({message: err.message.indexOf('E11000') > -1 ? 'User already found': ''})
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during registration');
    }

};
exports.loginRoute = async(req, res) => {
    return res.render('login')
};

exports.login = async (req, res) => {
    User.findOne({username: req.body.username})
    .then((response) => {
        if(response && response.toJSON().username) {
            if (bcrypt.compareSync(req.body.password, response.toJSON().password)) {
                res.send({message: 'Success logged in', data: response})
              } else {
                res.send({message: 'Password is wrong'})
              }
        } else {
            res.send({message: 'Username not Found'})
        }

        
    })
 
    // try {
    //     user.save()
    //       .then(() => res.send({key:'done'}))
    //       .catch(err => console.log(err));
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send('Error during registration');
    // }

};


