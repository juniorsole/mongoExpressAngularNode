
const http = require('http') //chamando o modulo http do node
const server = http.createServer(function(req, res){ //criando o servidor http com requisicao e resposta
  res.writeHead(200, {"Content-Type" : "text/html"}) //tipo de request e response
  res.end('<h1> Isso ai doidão </h1>')
})

const porta = 6666
server.listen(porta, function(){
  console.log(`Escutando a porta ${porta}`)
})
//criar um servidor http que é capaz de prover uma única resposta para todas
//requisições feitar a ele.
