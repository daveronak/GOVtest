'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://127.0.0.1/angulartest'
  },

  // Seed database on startup
  seedDB: false

};
