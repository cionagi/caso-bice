// Server
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Routes
const valuesRouter = require('./routes/values');

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.use('/api', valuesRouter);

app.use((req, res) => {
  res.status(404).json({
    error: 'Error. Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
