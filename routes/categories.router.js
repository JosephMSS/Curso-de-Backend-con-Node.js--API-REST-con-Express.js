const { Router } = require('express');
const router = Router();
router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json([{ productId, categoryId, name: `Product 1`, price: 3000 }]);
});
module.exports = { categoriesRouter: router };
