//create a basic backend server which take port from .env file
const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./src/routers/auth.router');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

