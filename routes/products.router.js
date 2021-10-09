const { Router } = require('express');
const faker = require('faker');
const router = Router();
router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 100;
  const products = [];
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName,
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});
router.get('/filter', (req, res) => {
  res.send('Products filter');
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json([{ id: id, name: `Product 1`, price: 3000 }]);
});
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});
module.exports = { productsRouter: router };
