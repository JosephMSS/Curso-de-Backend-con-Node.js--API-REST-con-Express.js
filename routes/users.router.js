const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('Params not found');
  }
});
module.exports = { usersRouter: router };
