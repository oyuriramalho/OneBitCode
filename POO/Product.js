class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addToStock(quantity) {
    this.inStock += quantity
    console.log(`Quantidade em estoque: ${this.inStock}`)
  }
  calculateDiscount(percent) {
    let proportion = 100 - percent
    let lowerValue = (this.price * proportion) / 100
    console.log(`Novo valor com desconto: R$ ${lowerValue}`)
    return lowerValue
  }
}

let eragon = new Product('Eragon', 'Fantasy and Adventure book', 100)
console.log(eragon)
eragon.addToStock(30)
console.log(eragon)
eragon.calculateDiscount(18)
