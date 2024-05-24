Create: 21/05/2024 às 12:08

# **O que são métodos?**

Métodos são as funções que realizam operações sobre os [[Atributos]] de um [[Objetos]].

``` JavaScript
class user {
	constructor (email, password) {
		this.email = email
		this.password = password
	}

	confirmAccount(email, password) { //Método de uma classe
		if (this.email == email && this.password == password) {
			return true
		}
	}
}
```
