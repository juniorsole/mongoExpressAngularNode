const fs = require('fs')
const files = fs.readdirSync(__dirname)

files.forEach(f => console.log(f))

//fs = file system, esse cara é um modulo do node que tem
//essas propriedades. Usamos a readdirSync, que é ler alguma coisa
//de forma sícrona. nesse caso passamos o __dirname, que é
//uma constante padrão do node que todos tem acessos,
//onde se localiza os exs....
