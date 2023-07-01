const express = require('express')
const mustacheExpress = require('mustache-express')
const db = require('./db')

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(express.urlencoded({extended: true}))

// Define as rotas da aplicação (declaradas na pasta /routes/)
app.use('/', require('./routes/pessoaRoutes'));
app.use('/', require('./routes/indexRoutes'));
app.use('/', require('./routes/autenticaRoutes'));
app.use('/', require('./routes/contaRoutes'));
app.use('/', require('./routes/movimentoRoutes'));

db.sync(() => console.log(`Banco de dados conectado`));

const app_port = 8000
app.listen(app_port, function () {
    console.log('app rodando na porta ' + app_port)
})