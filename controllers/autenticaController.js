const usuario = require('../models/usuario')

function loginView(req, res){
    usuario = req.session.usuario
    res.render("login.html", {usuario});
}

async function autenticar(req, res) {
    const usario = await usuario.findOne({ where: { email: req.body.email, password: req.body.password} });
    if (usuario !== null) {    
        req.session.autorizado = true
        req.session.usario = usuario
        res.redirect('/')
    } else {
        let erro_autenticacao = true
        res.render('login.html', {erro_autenticacao})
    }
}

function sair(req, res) {
    req.session.destroy(function(err) {
        console.log('Usuário desautorizado')
     })
     let sucesso_saida = true
     res.render('login.html', {sucesso_saida})
}

function verificarAutenticacao(req, res, next) {
    if (req.session.autorizado){
        console.log('Usuário autorizado')
        next()
    }
    else{
        console.log('Usuário NÃO autorizado')
        res.redirect('/login')
    }
}

module.exports =  {
    loginView,
    autenticar,
    verificarAutenticacao,
    sair
};