const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;
const { routerApi } = require('./routes');
const {
  boomErrorHandler,
  errorHandler,
  logError,
} = require('./middlewares/error.handler');
routerApi(app);
app.get('/', (req, res) => {
  res.send('Hello');
});
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);
app.listen(port, () => console.info(`Listen on http://localhost:${port}`));
