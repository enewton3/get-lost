const { Router } = require('express')
const usersRouter = require('./users')
const productsRouter = require('./products')
const router = Router();

router.get('/', (req, res) => res.send('I am root'))

router.use('/', usersRouter);
router.use('/products', productsRouter);

module.exports = router
