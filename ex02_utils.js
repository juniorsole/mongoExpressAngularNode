function upper(text){
  return text.toUpperCase()

}

module.exports = {upper}

//Esse cabra module.export torna visível a função upper para outros módulos (documentos)}
//passamos apenas a função upper, mas pode se passar o nome do módulo, ai ficaria
//disponível todas funções daquele módulo.
