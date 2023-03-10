const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const mongodb = require('mongodb').MongoClient;

const PORT = 3001;
const app = express();

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://127.0.0.1:27017/socialDB`;
// Declare a variable to hold the connection
// let db;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});