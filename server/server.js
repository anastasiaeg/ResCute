const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      firebase = require('firebase-admin'),
      config = require('./secrets/serviceAccountKey.json');

// Create global app object
const app = express();
const port = process.env.PORT || 5000;

// Firebase initialization
firebase.initializeApp({
  credential: firebase.credential.cert(config)
});
var db = firebase.firestore();

// Express setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'conduit',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));

app.use('/api', require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});