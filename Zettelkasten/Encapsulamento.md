Create: 21/05/2024 às 11:52

# **O que é Encapsulamento?**
 
Encapsulamento é a capacidade de esconder [[Atributos]] ou [[Métodos]] da [[Classe]] e torna-los privados. O usuário não irá conseguir alterar o valor dele, mas eu posso mostrar o valor dele através de métodos, que também podem ser privados.

``` JavaScript
class Account {
    #password //Atributo privado, usuário diz qual é.
    #balance = 10 //Atributo privado, mas já definido.

    constructor (user) {
        this.email = user.email //Atributo público
        this.#password = user.password
    }
    
    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }
  
    #authenticate(email, password) { // Método privado
        return this.email === email && this.#password === password
    }
} 

const user = {
    email: 'joaossousaa31@gmail.com',
    password: 3108
}
 
console.log(new Account(user).getBalance('joaossousaa31@gmail.com', 3108))
```
## **Referências**
- https://www.youtube.com/watch?v=QY0Kdg83orY