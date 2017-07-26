function temParam(param){
  return process.argv.indexOf(param) !== -1

}
// a partir desse process.argv, é possível passar parâmetros
//junto com a aplicação. caso execute esse exemplo pelo terminal,
//passando o parametro --producao, será escrito vish mainha, se não
// de boas.
// node ex08_process --producao 

if(temParam('--producao')) {
  console.log('Vish mainha')
}else {
  console.log('de boas')
}
