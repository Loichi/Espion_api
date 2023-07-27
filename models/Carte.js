// models/Carte.js

const mongoose = require('mongoose');

const carteSchema = new mongoose.Schema({
  domaineEntreprise: {
    type: String,
    required: true
  },
  poste: {
    type: String,
    required: true
  }
});

const Carte = mongoose.model('Carte', carteSchema);

module.exports = Carte;
