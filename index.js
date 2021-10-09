const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;
const { routerApi } = require('./routes');
routerApi(app);
app.get('/', (req, res) => {
  res.send('Hello');
});


app.listen(port, () => console.info(`Listen on http://localhost:${port}`));
