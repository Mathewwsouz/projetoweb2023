const express = require('express');
const router = express.Router();

const movimentoController = require('../controllers/movimentoController');

router.get('/movimento/transferencia', movimentoController.transaçãoView);
router.post('/movimento/transferencia', movimentoController.transação);

router.get('/movimento/transferencia', movimentoController.listaExtratoView);

router.get('/movimento/deposito/:id', movimentoController.depositoView);
router.post('/movimento/deposito', movimentoController.deposito);

module.exports = router;