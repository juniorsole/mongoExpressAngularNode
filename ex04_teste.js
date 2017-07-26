require('./ex04_global')


console.log(global.obj.name)
//ou
console.log(obj.name)

//Esse cabra mostra como as variáveis ou constantes se comportam no node,
//ao criar elas, elas ficam condicionadas no módulo em que foram criadas,
//só quando você seta ela pra ser de contexto global(console.log(global.obj.name),
//que consegue ver ela de outros módulos
//
