const express = require('express')
const credentialController = require('../controllers/credentialController');
const authController = require('../controllers/authController');
const router = express.Router();

router.route('/')
  .post(authController.protect, credentialController.addCredential);

router
  .route('/:id')
  .get(authController.protect, credentialController.getCredentialsByID)
  .patch(authController.protect, credentialController.updateCredentials)
  .delete(authController.protect, credentialController.deleteCredentials);

module.exports = router;
