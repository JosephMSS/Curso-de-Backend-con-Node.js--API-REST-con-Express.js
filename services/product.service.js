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
      });
    }
  }
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.#products);
      }, 5000);
    });
  }
  async findOne(id) {
    const name= this.getTotal()
    const product = this.#products.find((item) => item.id == id);
    if (!product) {
      throw new Error('Product not found');
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
      throw new Error('Product not found');
    }
    const product = this.#products[1];
    this.#products[i] = { ...product, ...data };
    console.log('JMMS_this.#products[i]', this.#products[i]);
    return { updatedProduct: this.#products[i] };
  }
  async delete(id) {
    const index = this.#products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.#products.splice(index, 1);
    return { id };
  }
}
module.exports = { ProductService };
