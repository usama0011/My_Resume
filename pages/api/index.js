const express = require('express');
const mongoose = require('mongoose');
import portfolioRoter from '../../pages/api/routes/portfolioRoute'
require('dotenv').config()

const app = express();


let mongooseURL = process.env.MONGOOSE_URL;
mongoose.connect(mongooseURL,{ useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});
app.use('localhost:3000/api/creativeportfolio', portfolioRoter);
let port = 3000;
app.listen(port,()=>{
  console.log("Server is ruuning sucessfully on" + port);
})
