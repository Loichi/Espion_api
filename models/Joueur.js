const mongoose = require('mongoose');


const JoueurSchema = new mongoose.Schema({
 
  nom: {
    type: String,
    required: true
  },
  estEspion: {
    type: Boolean,
    required: false
  },
  score: {
    type: Number,
    required: false
  }
});

const Joueur = mongoose.model('Joueur', JoueurSchema);

module.exports = Joueur;
