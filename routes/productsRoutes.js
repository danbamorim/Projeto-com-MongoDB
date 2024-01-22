const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController"); //exportando a controllers para configurar as rotas




router.get("/", ProductController.showProducts);
router.get("/create", ProductController.createProduct);
router.post("/create", ProductController.createProductPost);
router.get('/:id', ProductController.getProduct)

router.post('/remove/:id', ProductController.removeProduct)

router.post('/edit', ProductController.editProductPost)
router.get('/products/edit/:id', ProductController.editProduct)




module.exports = router;

// criação de rotas 