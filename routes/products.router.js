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
  console.log('JMMS_product',product)
  product?res.status(200).json(product):res.status(404).json({message:'Not found'});
});
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});
module.exports = { productsRouter: router };
