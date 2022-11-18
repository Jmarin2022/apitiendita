const { Router } = require('express')
const router = Router()

const { getProductos, postProductos,putProductos,patchProductos,deleteProductos } = require('../controllers/productos')

router.get('/',getProductos)
router.post('/',postProductos)
router.put('/',putProductos)
router.patch('/',patchProductos)
router.delete('/',deleteProductos)



module.exports = router