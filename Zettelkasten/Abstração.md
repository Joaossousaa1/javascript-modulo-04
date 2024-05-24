Create: 21/05/2024 às 12:18

# **O que é Abstração?**

A ideia principal por trás da abstração, é representar um objeto de uma forma abstrata, que seja obrigatoriamente herdado por outras classes. Eu posso criar uma classe abstrata com [[Atributos]] e [[Métodos]], mas a implementação só pode ser feito pelas classes filhas.
Ela é conhecida como **templates**, e na programação ela é chamada de **superclasse**.

```JavaScript
class Animal { //Classe abtrata, template ou modelo
    constructor (name, especie) {
        this.name = name
        this.especie = especie
    }
    
    bebe() {
        console.log(this.name + ' bebe leite')
    }
}
  
class Gato extends Animal {}
  
const gato = new Gato('Julieta', 'Mamífero')
gato.bebe() // return 'Julieta bebe leite'
```

## **Referências**
- https://www.youtube.com/watch?v=QY0Kdg83orY