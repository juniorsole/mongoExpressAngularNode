console.log(global === this) //false
console.log(module === this) //false
console.log(module.exports === this) //true

//Isso mostra que o this é a mesma coisa que o module.exports,
//Quando coloco o this.. minha função ou variável é exportada junto ao módulo
//que eu exportar com o require()....
//Ex, sem o this nessa função digaOi, eu não conseguiria usar ela no ex05_teste.js ,
//mas consigo pos no ex05_teste.js eu fiz o require desse módulo (ex05_module.js) lá



this.digaOi = function(){
  console.log('Oi zente')
}
