const express = require('express')
const websiteController = require('../controllers/websiteController');
const authController = require('../controllers/authController');
const router = express.Router();

router.route('/')
  .get(authController.protect, websiteController.getAllSites)
  .post(websiteController.addSite);

router
  .route('/:id')
  .get(websiteController.getSiteByID)
  .patch(websiteController.updateSite)
  .delete(websiteController.deleteSite);

module.exports = router;
