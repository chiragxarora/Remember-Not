const express = require('express')
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotpassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.resetPassword);
router.patch('/updatepassword', authController.protect, authController.updatePassword);
router.patch('/updateme', authController.protect, userController.updateMe);
router.get('/mycredentials', authController.protect, userController.myCredentials);
router.get('/validateme/:passCode', authController.protect, userController.validateMe);

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.addUser);

router
  .route('/:id')
  .get(userController.getUserByID)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
