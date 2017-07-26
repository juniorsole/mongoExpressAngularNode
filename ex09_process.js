process.stdout.write('Esta gostando dessa porcaria? ')
process.stdin.on('data', function(data){
  process.stdout.write(`Sua resposta foi : ${data.toString()} Obrigado\n`)
  process.exit()
})

//ESSE CABRA AQUI PERMITE O USUARIO RESPONDER NO console
