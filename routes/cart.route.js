const { Router } = require('express')
const { cartController } = require('../controllers/cart.controller')

const router = Router()

router.get('/cart', cartController.getCart)
router.post('/cart', cartController.addCart)

module.exports = router