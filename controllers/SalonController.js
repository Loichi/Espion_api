const Salon = require('../models/Salon');
const Joueur = require('../models/Joueur');

// Get all salons with their associated joueurs (players)
async function getAllSalons(req, res) {
  try {
    const salons = await Salon.find().populate('joueurs');
    res.json(salons);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the salons.' });
  }
}

// Get a single salon by its ID
async function getOneSalon(req, res) {
  try {
    const salonId = req.params.id;
    const salon = await Salon.findById(salonId);
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }
    res.json(salon);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the salon.' });
  }
}

// Create a new salon with players from the 'Joueur' collection
async function createSalon(req, res) {
  try {
    // Fetch all joueurs from the 'Joueur' collection
    const joueurs = await Joueur.find();

    // Check if there are at least 3 joueurs available to create a new salon
    if (joueurs.length <= 2) {
      return res.status(500).json({ error: 'Not enough players available.' });
    }

    // Create a new salon with all the fetched joueurs
    const salon = await Salon.create({ joueurs: joueurs });

    res.status(201).json(salon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the salon.' });
  }
}

// Update an existing salon with new joueurs (players)
async function updateSalon(req, res) {
  try {
    const { joueurs } = req.body;
    const salonId = req.params.id;

    // Find the salon by ID and update its 'joueurs' field with the new joueurs array
    const salon = await Salon.findByIdAndUpdate(salonId, { joueurs }, { new: true });
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }
    res.json(salon);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the salon.' });
  }
}

// Delete a single salon by its ID
async function deleteSalon(req, res) {
  try {
    const salonId = req.params.id;
    const salon = await Salon.findByIdAndDelete(salonId);
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }
    res.json({ message: 'Salon deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the salon.' });
  }
}

// Delete all salons
async function deleteAllSalon(req, res) {
  try {
    await Salon.deleteMany();
    res.json({ message: 'All salons have been deleted successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the salons.' });
  }
}


module.exports = {
  getAllSalons,
  getOneSalon,
  createSalon,
  updateSalon,
  deleteSalon,
  deleteAllSalon
};
