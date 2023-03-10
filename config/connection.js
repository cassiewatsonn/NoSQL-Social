const { connect, connection } = require('mongoose');

connect('mongodb://localhost/NoSQLsocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;