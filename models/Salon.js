
const mongoose = require('mongoose');



const salonSchema = new mongoose.Schema({
  joueurs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Joueur' 
  }]
});


const Salon = mongoose.model('Salon', salonSchema);

module.exports = Salon;
