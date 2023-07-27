const Carte = require('../models/Carte');

// Create a new carte
async function createCarte(req, res) {
  try {
    const { domaineEntreprise, poste } = req.body;
    const carte = await Carte.create({ domaineEntreprise, poste });
    res.status(201).json(carte);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the carte.' });
  }
}

// Get all cartes
async function getAllCartes(req, res) {
  try {
    const cartes = await Carte.find();
    res.json(cartes);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the cartes.' });
  }
}

// Get a carte by its ID
async function getOneCarte(req, res) {
  try {
    const carteId = req.params.id;
    const carte = await Carte.findById(carteId);
    if (!carte) {
      return res.status(404).json({ message: 'Carte not found.' });
    }
    res.json(carte);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the carte.' });
  }
}

// Update a carte's information
async function updateCarte(req, res) {
  try {
    const { domaineEntreprise, poste } = req.body;
    const carteId = req.params.id;
    const carte = await Carte.findByIdAndUpdate(carteId, { domaineEntreprise, poste }, { new: true });
    if (!carte) {
      return res.status(404).json({ message: 'Carte not found.' });
    }
    res.json(carte);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the carte.' });
  }
}

// Delete a carte by its ID
async function deleteCarte(req, res) {
  try {
    const carteId = req.params.id;
    const carte = await Carte.findByIdAndDelete(carteId);
    if (!carte) {
      return res.status(404).json({ message: 'Carte not found.' });
    }
    res.json({ message: 'Carte deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the carte.' });
  }
}

// Get a list of cartes based on their 'domaineEntreprise'
async function getAllCarteByDomaineEtreprise(req, res) {
  try {
    const domaine = req.params.domaineEntreprise;

    console.log(domaine);

    const cartes = await Carte.find({ domaineEntreprise: domaine });

    console.log(cartes);

    if (cartes.length === 0) {
      return res.status(404).json({ message: 'No cartes found for this domaineEntreprise.' });
    }
    res.json(cartes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching cartes by domaineEntreprise.' });
  }
}

// Delete cartes based on their 'domaineEntreprise'
async function deleteCartesByDomaineEntreprise(req, res) {
  try {
    const domaine = req.params.domaineEntreprise;

    const result = await Carte.deleteMany({ domaineEntreprise: domaine });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No cartes found for this domaineEntreprise.' });
    }

    res.json({ message: `All cartes for the domaine ${domaine} have been deleted successfully.` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting cartes by domaineEntreprise.' });
  }
}

// Get a list of all distinct 'domaineEntreprise'
async function getAllDomaineEntreprise(req, res) {
  try {
    // Use the distinct method to fetch all different 'domaineEntreprise'
    const domaines = await Carte.distinct('domaineEntreprise');

    // Check if any 'domaineEntreprise' were found
    if (domaines.length === 0) {
      return res.status(404).json({ message: 'No domaineEntreprise found in the database.' });
    }

    res.json(domaines);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching all domaineEntreprise.' });
  }
}

// Get a list of cartes based on a random 'domaineEntreprise'
async function getCartesByRandomDomaineEntreprise(req, res) {
  try {
    const domaines = await Carte.distinct('domaineEntreprise');

    if (domaines.length === 0) {
      return res.status(404).json({ message: 'No domaineEntreprise found in the database.' });
    }

    const randomIndex = Math.floor(Math.random() * domaines.length);

    const randomDomaine = domaines[randomIndex];

    const cartes = await Carte.find({ domaineEntreprise: randomDomaine });

    if (cartes.length === 0) {
      return res.status(404).json({ message: `No cartes found for the random domaineEntreprise "${randomDomaine}".` });
    }

    res.json(cartes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching cartes by random domaineEntreprise.' });
  }
}

module.exports = {
  createCarte,
  getAllCartes,
  getOneCarte,
  updateCarte,
  deleteCarte,
  getAllCarteByDomaineEtreprise,
  deleteCartesByDomaineEntreprise,
  getAllDomaineEntreprise,
  getCartesByRandomDomaineEntreprise
};
