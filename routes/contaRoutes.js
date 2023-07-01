const express = require('express');
const router = express.Router();

const contaController = require('../controllers/contaController');

router.get('/contaCorrente/cadastrarConta', contaController.cadastrarContaView);
router.post('/contaCorrente/cadastrarConta', contaController.cadastrarConta);

router.get('/contaCorrente/listarSaldo', contaController.listarSaldoView);

router.get('/contaCorrente/selecionarConta/:id', contaController.selecionarContaView);
router.post('/contaCorrente/selecionarConta', contaController.selecionarConta);

module.exports = router;