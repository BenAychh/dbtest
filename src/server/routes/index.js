var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');

router.get('/', (req, res, next) => {
  knex('tests')
  .then(results => {
    res.json(results);
  });
});

router.get('/add', (req, res, next) => {
  knex('tests').insert({
    test: Math.random(),
  })
  .then(() => {
    res.send('Added');
  });
});


module.exports = router;
