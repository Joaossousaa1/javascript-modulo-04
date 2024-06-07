Create: 22/05/2024 às 10:21

# **O que é Polimorfismo?**

**Polimorfismo é o conceito que descreve o ato de um [[Objetos]] poder assumir diferentes formas.**

Nada mais é um nome chamado para quando eu sobrescrevo um [[Métodos]], ou seja, se eu tenho uma classe Pai com um método A, e eu tenho uma classe Filha, polimorfismo é quando a classe filha tem suas próprias implementações dos métodos da classe mãe.
- Poli: Várias
- Morfo: Forma

Exemplo: 
```JavaScript
class Vehicle {
    move() {
        console.log(`The vehicle moves`) //Método da classe pai
    }
}

class Car extends Vehicle {
    move() {
        console.log(`The car moves`) //Mesmo método na classe filha, com implementação diferente === Polimorfismo
    }
}

class Ship extends Vehicle {
    move() {
        console.log(`The ship moves`) //Mesmo método na classe filha, com implementação diferente === Polimorfismo
    }
}
```
