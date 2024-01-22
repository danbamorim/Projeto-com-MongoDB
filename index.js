const express = require('express')
const exphbs = require('express-handlebars')  
const app = express()

const productsRoutes = require('./routes/productsRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars') // visualizacao do handlebars 

app.use(
  express.urlencoded({
    extended: true,
  }), // configura o Express.js para analisar os dados de formulários HTML enviados através de solicitações POST
)

app.use(express.json())

app.use(express.static('public'))

// Essas duas linhas são comuns em muitas configurações do Express.js e são usadas para lidar com solicitações JSON e servir arquivos estáticos, respectivamente.

app.use('/', productsRoutes) // exportando a rotas no index

app.listen(3000) // utilizando a porta 


