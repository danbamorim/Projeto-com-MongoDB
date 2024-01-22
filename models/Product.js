const { ObjectId } = require('mongodb') // instalando e utilizando a depedencia ObjectId 
const conn = require('../db/conn') // exportando o banco de dados

class Product {
  constructor(name, price, description, image) {
    this.name = name
    this.price = price
    this.description = description
    this.image = image
  }

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
      image: this.image,
    })

    return product
  }

  static getProducts() {
    const products = conn.db().collection('products').find().toArray()

    return products
  }



  static async getProductById(id) {
    if (!ObjectId.isValid(id)) {
      // Lida com o caso em que o id não é válido
      return null; // ou lança um erro, dependendo da lógica desejada
    }

    const product = await conn
      .db()
      .collection('products')
      .findOne({ _id: new ObjectId(id) }); // Corrigindo o uso de new

    return product;
  }

  static async removeProductById(id) {
    await conn
      .db()
      .collection('products')
      .deleteOne({ _id: new ObjectId(id) })
    return
  }
}


//MOELS: PRODUCT.JS : são responsáveis por representar e manipular a lógica de dados da aplicação

module.exports = Product