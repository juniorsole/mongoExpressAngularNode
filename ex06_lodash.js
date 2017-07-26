const _ = require('lodash')
//Lodash torna o JavaScript mais fácil ao assumir o incômodo de trabalhar com matrizes,
//números, objetcs, strings, etc.
//O Lodash é ótimos para: iteração de arrays, objects e strings;
// manipulação e teste de valores; criação de funções compostas.

const alunos = [
  {
    nome: 'Zuão',
    nota: 8.0
  },{
    nome: 'Bubuzinha',
    nota: 10
  },{
    nome: 'Carla',
    nota: 9.8
  }
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)
