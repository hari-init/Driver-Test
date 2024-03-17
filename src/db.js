const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://hravi:Hari858285%40123@cluster0.5zskbpd.mongodb.net/driveTest';

mongoose.connect(DB_URI)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));