// Server

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Dependency
const axios = require('axios');
const moment = require('moment');
const _ = require('lodash');

// Const
const BASE_URL = 'https://www.indecon.online/';
const ROUTES = {
  last: '/last',
  values_by_key: '/values/:key',
  get_values_by_key_and_date: '/date/:key/:date',
};

app.use(cors());

// Get all values from BASE URL API
app.get('/', async (request, res) => {
  const { status, data } = await axios.get(`${BASE_URL}${ROUTES['last']}`);
  if (status !== 200) {
    res.status(500).send('unknown error');
  }
  res.json(data);
});

// Get Data by id from BASE URL API
app.get('/values/:id', async (req, res) => {
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
  res.json(data);
});

app.get('/values/:id?date', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});