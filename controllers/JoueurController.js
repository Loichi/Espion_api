const Joueur = require('../models/Joueur');

// Create a new joueur
async function createJoueur(req, res) {
  try {
    const { nom } = req.body;
    const joueur = await Joueur.create({ nom, estEspion: false, score: 0 });
    res.status(201).json(joueur);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the joueur.' });
  }
}

// Get all joueurs
async function getAllJoueurs(req, res) {
  try {
    const joueurs = await Joueur.find();
    res.json(joueurs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the joueurs.' });
  }
}

// Get a joueur by their ID
async function getOneJoueur(req, res) {
  try {
    const joueurId = req.params.id;
    const joueur = await Joueur.findById(joueurId);
    if (!joueur) {
      return res.status(404).json({ message: 'Joueur not found.' });
    }
    res.json(joueur);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the joueur.' });
  }
}

// Update a joueur's information
async function updateJoueur(req, res) {
  try {
    const { nom, estEspion, score } = req.body;
    const joueurId = req.params.id;
    const joueur = await Joueur.findByIdAndUpdate(joueurId, { nom, estEspion, score }, { new: true });
    if (!joueur) {
      return res.status(404).json({ message: 'Joueur not found.' });
    }
    res.json(joueur);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while updating the joueur.' });
  }
}

// Delete a joueur by their ID
async function deleteJoueur(req, res) {
  try {
    const joueurId = req.params.id;
    const joueur = await Joueur.findByIdAndDelete(joueurId);
    if (!joueur) {
      return res.status(404).json({ message: 'Joueur not found.' });
    }
    res.json({ message: 'Joueur deleted successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the joueur.' });
  }
}

// Delete all joueurs
async function deleteAllJoueur(req, res) {
  try {
    await Joueur.deleteMany();
    res.json({ message: 'All joueurs have been deleted successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the joueurs.' });
  }
}


module.exports = {
  createJoueur,
  getAllJoueurs,
  getOneJoueur,
  updateJoueur,
  deleteJoueur,
  deleteAllJoueur
};
