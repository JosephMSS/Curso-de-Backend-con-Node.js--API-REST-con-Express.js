const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/products', (req, res) => {
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
app.get('/products/filter', (req, res) => {
  res.send('Products filter');
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json([{ id: id, name: `Product 1`, price: 3000 }]);
});
app.get('/users', (req, res) => {
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
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json([{ productId, categoryId, name: `Product 1`, price: 3000 }]);
});
app.listen(port, () => console.info(`Listen on http://localhost:${port}`));
