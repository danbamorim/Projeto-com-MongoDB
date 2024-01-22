const Product = require('../models/Product')

module.exports = class ProductController {
  static async showProducts(req, res) {
    const products = await Product.getProducts()

    console.log(products)

    res.render('products/all', { products })
  }

  static createProduct(req, res) {
    res.render('products/create')
  }

  static createProductPost(req, res) {
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description
    const image = req.body.image

    const product = new Product(name, price, description, image)

    product.save()

    res.redirect('/')
  }

  static async getProduct(req, res) {
    const id = req.params.id

    const product = await Product.getProductById(id)

    console.log(product)

    res.render('products/product', { product })
  }

    static removeProduct(req, res) {
    const id = req.params.id

    Product.removeProductById(id)

    res.redirect('/')
  }

  static async editProduct(req, res) {
    const id = req.params.id

    const product = await Product.getProductById(id)

    res.render('products/edit', { product })
  }

  static async editProductPost(req,res){
    const id = req.body.id
    const name = req.body.name
    const image = req.body.image
    const price = req.body.price
    const description = req.body.description

    const product = new Product( name,image,price,description)
    await product.updateProduct(id)
    res.redirect('/products')
  }
}