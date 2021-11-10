'use strict';

module.exports = (capabilities) => {
  return (req, res, next) => {
    //   try {
          if (req.user.capabilities.includes(capabilities)) {
              next();
          } else {
              next('Access Denied');
          }
          }
    //   } catch (e) {
    //       next('invalid 3Login');
    //   }

  
}
