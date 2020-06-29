const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//env variable file
require('dotenv').config();

//server setup
const app = express();
const port = process.env.PORT || 5000;

//middle ware
app.use(cors());
app.use(express.json());

//setup database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
//once the connection is open, log successfull message
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/users');
app.use('/users',usersRouter);
//starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
