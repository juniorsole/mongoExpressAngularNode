const s1 = require('./ex03_singleton')
const s2 = require('./ex03_singleton')

s1.exibirProximo()
s2.exibirProximo()
s1.exibirProximo()
s2.exibirProximo()

//aqui verificamos que a instância usada é a mesma sempre (Singleton),
//assim os resultados são incrementados na mesma instância,
//resultad: 1,2,3,4. Se não s1 seria uma instância e s2 outra.
