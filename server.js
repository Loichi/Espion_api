// server.js

//Routes
const salonRoutes = require("./routes/SalonRoutes");
const carteRoutes = require('./routes/CarteRoutes');
const joueurRoutes = require('./routes/JoueurRoutes');
const cors = require('cors');

const express = require("express");
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://LoichiDb:REVOThYvKOMYyIwH@cluster0.w2aqocy.mongodb.net/";

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

async function connect() {
  
  try{
    await mongoose.connect(uri);
    console.log("connected to MongoDb");
  }catch{
    console.error(error);
  }
}
connect();

app.listen(8000, () => {
  console.log("Server starter on port 8000");
})


app.use('/cartes', carteRoutes);
app.use('/salons', salonRoutes);
app.use('/joueurs', joueurRoutes);