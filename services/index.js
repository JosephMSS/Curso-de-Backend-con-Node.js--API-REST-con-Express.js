const faker = require('faker');
const { ProductService } = require('./product.service');
const productService = new ProductService(faker);
module.exports={productService,};
