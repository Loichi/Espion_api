
const express = require('express');
const router = express.Router();
const joueurController = require('../controllers/JoueurController');


// GET requests
router.get('/', joueurController.getAllJoueurs);
router.get('/:id', joueurController.getOneJoueur);

// POST request
router.post('/', joueurController.createJoueur);

// PUT request
router.put('/:id', joueurController.updateJoueur);

// DELETE requests
router.delete('/:id', joueurController.deleteJoueur);
router.delete('/', joueurController.deleteAllJoueur);


module.exports = router;
