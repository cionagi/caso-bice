const express = require('express');
const app = express();

const PORT = 8080

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
