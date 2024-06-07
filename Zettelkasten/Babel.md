Create: 21/05/2024 às 08:02

# **O que é o Babel?**
Babel é um [[Compilador]] JavaScript, um compilador é uma ferramenta que permite convertes o código escrito em uma linguagem para outra linguagem. O babel é um conjunto de ferramentas que converte o código javascript nas versões mais recentes para as versões mais antigas. 

# **Usando o Babel?**
- `npm init -y`
- `npm install --save-dev @babel/core @babel/cli @babel/preset-env`
- `npx babel index.js`: Só vai corrigir algumas coisas, não vai converter ainda
- `npx babel index.js --out-file dist.js`: Vai criar um arq dist.js
- `npx babel index.js --out-file dist.js --presets=@babel/preset-env`: Vai criar um arq formatado de acordo com as presets passadas.
- `npx babel src --out-dir dist --presets=@babel/preset-env`: Vai criar uma pasta e coloar os arq formatados.

# **Configurando o Babel**
`module.exports = { presets: [ [ "@babel/preset-env" ] ] }`