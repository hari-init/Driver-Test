const express = require('express');
const router = express.Router();
const g2Controller = require('../controllers/g2Controller')
const gController = require('../controllers/gController')
const userController = require('../controllers/userController')

router.get('/', (req, res) => res.render('dashboard'));
router.get('/g', gController.G_get);
router.post('/g', gController.G_get_list);
router.get('/g2', g2Controller.G2_get);
router.post('/g2', g2Controller.G2_get_user);
router.post('/submit-g2-info', g2Controller.G2_insert_post);
router.post('/fetch-license-info', gController.G_get_list);
router.post('/update-license-info', gController.G_update_list);
router.post('/login', userController.login);
router.get('/login', userController.loginRoute);
router.post('/register', userController.signUp)

module.exports = router;
