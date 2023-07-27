const express = require('express');
const router = express.Router();
const salonController = require('../controllers/SalonController');

// GET
router.get('/', salonController.getAllSalons);
router.get('/:id', salonController.getOneSalon);

// POST
router.post('/', salonController.createSalon);

// PUT
router.put('/:id', salonController.updateSalon);

// DELETE
router.delete('/:id', salonController.deleteSalon);
router.delete('/', salonController.deleteAllSalon);

module.exports = router;
