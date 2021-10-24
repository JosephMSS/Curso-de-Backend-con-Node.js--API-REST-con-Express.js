const boom = require('@hapi/boom');
class ProductService {
  #faker;
  #products;
  constructor(faker) {
    this.#faker = faker;
    this.#products = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 100; i++) {
      this.#products.push({
        id: this.#faker.datatype.uuid(),
        name: this.#faker.commerce.productName(),
        price: parseInt(this.#faker.commerce.price(), 10),
        image: this.#faker.image.imageUrl(),
        isBlock: this.#faker.datatype.boolean(),
      });
    }
  }
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.#products);
      }, 1000);
    });
  }
  async findOne(id) {
    const product = this.#products.find((item) => item.id == id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }
    return product;
  }
  async create(data) {
    const newProduct = {
      id: this.#faker.datatype.uuid(),
      ...data,
    };
    this.#products.push(newProduct);
    return { newProduct };
  }
  async update({ id, data }) {
    const i = this.#products.findIndex((item) => item.id === id);
    if (i === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.#products[1];
    this.#products[i] = { ...product, ...data };
    console.log('JMMS_this.#products[i]', this.#products[i]);
    return { updatedProduct: this.#products[i] };
  }
  async delete(id) {
    const index = this.#products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.#products.splice(index, 1);
    return { id };
  }
}
module.exports = { ProductService };
