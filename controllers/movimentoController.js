const movimento = require('../models/movimento')

function transaçãoView(req, res){
    movimento = req.session.movimento
    res.render("transferencia.html", {movimento});
}

function transação(req,res){
    ('views/movimento/transferencia', async (req, res) => {
        const contaOrigem = req.body.contaOrigem;
        const contaDestino = req.body.contaDestino;
        const valor = req.body.valor;
    
        try {
        const contaOrigemObj = await movimento.findByPk(contaCorrente_origem);
        const contaDestinoObj = await movimento.findByPk(contaCorrente_destino);
    
        if (!contaOrigemObj || !contaDestinoObj) {
            res.send('Conta(s) não encontrada(s)');
            return;
        }
    
        if (contaOrigemObj.saldo < valor) {
            res.send('Saldo insuficiente');
            return;
        }
    
        await sequelize.transaction(async (t) => {
            // Deduz o valor da conta de origem
            contaOrigemObj.saldo -= valor;
            await contaOrigemObj.save({ transaction: t });
    
            // Adiciona o valor na conta de destino
            contaDestinoObj.saldo += valor;
            await contaDestinoObj.save({ transaction: t });

            contaOrigemObj.data_movimento = new Date();
            await contaOrigemObj.save({ transaction: t });
            });
    
        res.send('Transação realizada com sucesso');
        } catch (error) {
        console.error('Erro ao realizar a transação:', error);
        res.send('Erro ao realizar a transação');
        }
    });
}
function listaExtratoView(req,res){
    ('views/movimento/transferencia', async (req, res) => {
    const numeroConta = req.params.numeroConta;
  
    try {
      const numeroConta = await contaCorrente.findByPk(numeroConta);
  
      if (!contaCorrente) {
        res.send('Conta não encontrada');
        return;
      }
  
      const transferencia = await Transacao.findAll({
        where: { contaId: conta.id },
        order: [['createdAt', 'DESC']],
      });
  
      res.json(transferencia);
    } catch (error) {
        console.error('Erro ao exibir extrato:', error);
        res.send('Erro ao exibir extrato');
      }
  });
}

function depositoView(req, res){
    movimento = req.session.movimento
    res.render("deposito.html", {movimento});
}

function deposito(req,res){
    ('/deposito', (req, res) => {
    const valorDeposito = Number(req.body.valor);
    
    if (valorDeposito <= 0 || isNaN(valorDeposito)) {
      res.send('Valor de depósito inválido');
      return;
    }
  
    saldo += valorDeposito;
    res.send(`Você depositou R$ ${valorDeposito}. Seu saldo atual é: R$ ${saldo}`);
  });
}

module.exports =  {
    transaçãoView,
    transação,
    listaExtratoView,
    depositoView,
    deposito
};