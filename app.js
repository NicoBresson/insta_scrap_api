const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');


const app = express();

const apiController = require('./controllers/api');

dotenv.config({ path: '.env' });

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/*', function (req, res, next) {
  console.log("A new request received to " + req.originalUrl);
  next();
});

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
  res.send('Hello World! I am the Dreister API')
})

/**
 * API routes.
 */
app.get('/api/profiles', apiController.getAllProfiles)
app.get('/api/profiles/:profileId',apiController.getProfile)
app.get('/api/update-followers', apiController.scrapProfiles)
app.post('/api/profile', apiController.createOrUpdateProfile)
app.post('/api/profiles', apiController.createOrUpdateMultipleProfiles)


/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
