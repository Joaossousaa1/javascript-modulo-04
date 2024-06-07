Create: 28/05/2024 às 10:19

### **O que são os acessadores?**

Os acessadores são um recurso para definir a forma como acessamos uma propriedade de um [[Objetos]]. 
- Nós acessamos dessa forma: `pessoa.nome`
- Para alterar valor desse [[Atributos]]: `pessoa.nome = 'João'`.
Os acessadores servem por exemplo quando temos atributos privados([[Encapsulamento]]) e queremos torna-los disponíveis para outras pessoas pegarem ou atribuírem um novo valor a eles.
``` JavaScript
class Wallet {
	#money
	
	constructor() {
		this.#money = 100
	}
	//Agora esse atributo #money eu não consigo mudar o valor dele ou chamar ele no aqv main.
	get money() {
		return this.#money //Dessa forma eu consigo mostrar a prop #money
	}

	set money(newValue) {
		this.#money = newValue //Dessa forma eu mudo o valor de #money
	}
}

const myWallet = new Wallet()
console.log(myWallet.money) //printa o valor de money
myWallet.money = 150 //altera o valor de money para 150
```

E veja que chamamos money como se estivéssemos chamando uma propriedade de um objeto que não tem atributos privados, pois se chamarmos como `money()` iria dar erro, pois `get money()` e `set money()` não são funções.