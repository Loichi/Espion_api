// routes/carteRoutes.js
const express = require('express');
const router = express.Router();
const carteController = require('../controllers/CarteController');


// GET requests
router.get('/', carteController.getAllCartes);
router.get('/:id', carteController.getOneCarte);
router.get('/domaine-entreprise/:domaineEntreprise', carteController.getAllCarteByDomaineEtreprise);
router.get('/liste/domaine-entreprise', carteController.getAllDomaineEntreprise);
router.get('/random/domaine-entreprise', carteController.getCartesByRandomDomaineEntreprise);

// POST request
router.post('/', carteController.createCarte);

// PUT request
router.put('/:id', carteController.updateCarte);

// DELETE requests
router.delete('/:id', carteController.deleteCarte);
router.delete('/domaine-entreprise/:domaineEntreprise', carteController.deleteCartesByDomaineEntreprise);

module.exports = router;
