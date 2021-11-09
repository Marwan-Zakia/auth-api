'use strict';

const base64 = require('base-64');
const { users } = require('../models/index');

module.exports = async (req, res, next) => {

  const encodedHeaders = req.headers.authorization.split(' ')[1]; 
  const [username, password] = base64.decode(encodedHeaders).split(':'); 

  users.authenticateBasic(username, password).then(validUser => {
    req.user = validUser;
    next();
  }).catch(err => { next('Invalid Login') })
  


}
