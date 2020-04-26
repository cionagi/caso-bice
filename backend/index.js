// Server
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

// Routes
const values = require('./routes/values');

app.use('/api', values);

app.use((req, res) => {
  res.status(404).json({
    error: 'Error. Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
