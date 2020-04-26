const express = require('express');
const router = express.Router();

// Dependency
const axios = require('axios');
const moment = require('moment');
const _ = require('lodash');

//Utils
const parseValue = require('../utils/valueFormat');
const { ROUTES, BASE_URL } = require('../config/routesExt');

router.get('/', async (request, res) => {
  res.send('Hola');
});

// Get all values from BASE URL API
router.get('/values', async (request, res) => {
  console.log(`${BASE_URL}${ROUTES['last']}`);
  const { status, data } = await axios.get(`${BASE_URL}${ROUTES['last']}`);
  if (status !== 200) {
    res.status(500).send('unknown error');
  }

  const dataFormat = Object.keys(data).map((key) => {
    const { date, value, unit } = data[key];
    return {
      ...data[key],
      dateParse: moment.unix(date).format('DD-MM-YYYY'),
      valueParse: parseValue.parse(unit, value),
    };
  });
  res.json(dataFormat);
});

// Get Data by id from BASE URL API
router.get('/values/:id', async (req, res) => {
  const { id } = req.params;
  const { status, data } = await axios.get(
    `${BASE_URL}${ROUTES['values_by_key'].replace(':key', id)}`
  );
  if (status !== 200) {
    res.status(500).send('unknown error 1');
  }
  if (_.isEmpty(data)) {
    res.json({ data: {}, message: 'zero results' });
  }

  const { key, unit, values } = data;
  const dataResponse = Object.keys(values).map((k) => ({
    date: moment.unix(k).format('DD-MM-YYYY'),
    value: values[k],
    valueFormat: parseValue.parse(unit, values[k]),
  }));

  res.json(dataResponse);
});

router.get('/values/:id?date', async (req, res) => {
  const { id } = req.params;
  const { date } = req.query;

  if (!moment(date, 'DD-MM-YYYY').isValid()) {
    res.status(500).send('unknown error 1');
  }

  const { status, data } = await axios.get(
    `${BASE_URL}${ROUTES['get_values_by_key_and_date'].replace(':key', id).replace(':date', date)}`
  );
  if (status !== 200) {
    res.status(500).send('unknown error 2');
  }

  res.json(data);
});

module.exports = router;
