class ProductService {
  #faker;
  constructor(faker) {
    this.#faker = faker;
    this.products = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: this.#faker.datatype.uuid(),
        name: this.#faker.commerce.productName(),
        price: parseInt(this.#faker.commerce.price(), 10),
        image: this.#faker.image.imageUrl(),
      });
    }
  }
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((item) => item.id == id);
  }
}
module.exports = { ProductService };
