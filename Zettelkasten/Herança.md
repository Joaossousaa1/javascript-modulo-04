Create: 21/05/2024 às 11:35

# **O que é Herança?**

A Herança é a capacidade de um [[Objetos]] ser idealizado baseado em outro objeto, se no objeto principal (**Objeto pai**) tem um atributo chamado idade, esse atributo chamado idade pode ser estendido para um **Objeto filho**, e o objeto filho, pode ter seus próprios atributos.

``` JavaScript
class Property { //Classe Pai
	constructor (area, price) { //Atributos da classe Property
		this.area = area 
		this.price = price
	}
}

class House extend Property { //Classe Filho
	constructor (room, area, price) { //room é um atributo da classe filho
		super(area, price) //Traz o construtor da classe Pai
		this.room = room
	}
}
```


## **Referências**
- https://www.youtube.com/watch?v=QY0Kdg83orY