const { Router } = require('express');
const router = Router();
const { productService } = require('../services');
router.get('/', (req, res) => {
  const products = productService.find();
  res.json(products);
});
router.get('/filter', (req, res) => {
  res.send('Products filter');
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = productService.findOne(id);
  product
    ? res.status(200).json(product)
    : res.status(404).json({ message: 'Not found' });
});
router.post('/', (req, res) => {
  const body = req.body;
  const { newProduct } = productService.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const { updatedProduct } = productService.update({ id, data: body });
  res.json({
    message: 'update',
    data: updatedProduct,
    id,
  });
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const { id: idDeleted } = productService.delete(id);
  res.json({
    id: idDeleted,
  });
});
module.exports = { productsRouter: router };
