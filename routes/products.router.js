const { Router } = require('express');
const router = Router();
const { productService } = require('../services');
router.get('/', async (req, res) => {
  try {
    const products = await productService.find();
    res.json(products);
  } catch (error) {
    console.error(error);
  }
});
router.get('/filter', (req, res) => {
  res.send('Products filter');
});
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.findOne(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const { newProduct } = await productService.create(body);
    res.status(201).json({
      message: 'created',
      data: newProduct,
    });
  } catch (error) {
    console.error(error.message);
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const { updatedProduct } = await productService.update({ id, data: body });
    res.json({
      message: 'update',
      data: updatedProduct,
      id,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
    /**
     * Cuando se lanza un thow new Error
     * retorna un objeto de error sop
     *
     */
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { id: idDeleted } = await productService.delete(id);
    res.json({
      id: idDeleted,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
module.exports = { productsRouter: router };
