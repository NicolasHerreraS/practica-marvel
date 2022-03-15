const express = require('express');
const moviesRoute = require('./movies.router');
const fakersRoute = require('./products.router');
const departmentsRoute = require('./departments.router');

function routerApi(my_app){
  const router = express.Router();
  /*Parte estática del endpoint*/
  my_app.use('/api/v1', router);
  /*Parte estática + dinámica del endpoint*/
  router.use('/movies', moviesRoute)
  router.use('/fakers', fakersRoute)
  router.use('/departments', fakersRoute)
}

module.exports = routerApi;
