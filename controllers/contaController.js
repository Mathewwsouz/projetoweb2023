const contaCorrente = require('../models/contaCorrente')

function cadastrarContaView(req, res){
    contaCorrente = req.session.contaCorrente
    res.render("cadastrarConta.html", {contaCorrente});
}

function cadastrarConta(req, res){
    let contaCorrente = {
        numeroConta: req.body.numeroConta,
        nome: req.body.nome,
        data_abertura: req.body.data_abertura,
        saldo: req.body.saldo,
    }
    
    contaCorrente.create(contaCorrente).then((result)=>{
        res.render("contaCorrente/cadastrarConta.html", {contaCorrente});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("contaCorrente/cadastrarConta.html", {erro});
    })
}

function listarSaldoView(req, res){
    contaCorrente.findAll().then((Saldo)=>{
        res.render("contaCorrente/listarSaldo.html", {Saldo});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("contaCorrente/listarSaldo.html", {erro});
    })
}

function selecionarContaView(req, res){
    res.render("contaCorrente/selecionarConta.html", {});
}

function selecionarConta(req, res){
    let contaCorrente = {
        numeroConta: req.body.numeroConta,
    }
    
    contaCorrente.create(pessoa).then((result)=>{
        res.render("contaCorrente/selecionarConta.html", {contaCorrente});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("contaCorrente/selecionarConta.html", {erro});
    })
}

module.exports =  {
    cadastrarContaView,
    cadastrarConta,
    listarSaldoView,
    selecionarContaView,
    selecionarConta
};