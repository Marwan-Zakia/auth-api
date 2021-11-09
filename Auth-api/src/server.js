'use strict';

const express = require('express');
const notFound = require('./error-handlers/404.js');
// const notFoundHandler = require('./error-handlers/404.js');
// const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const authRoutes = require('./routes/routes.js');
const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(express.urlencoded({ extended: true }));
// Routes

// Catchalls


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(logger);
app.use('/api/v2', v2Routes);
app.use('/api/v1', v1Routes);

// app.use('*', notFoundHandler);
// app.use(errorHandler);

module.exports = {
  server: app,
  start: PORT => {
    if (!PORT) { throw new Error('Missing PORT'); }
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};



