// É legal dar o nome dos arq com o nome da classe que vamos criar;
class Book {
    constructor (title, author) {
        this.title = title
        this.author = author
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const harryPotter = new Book('A pedra filosofal', 'J.K. Rowling')
console.log(harryPotter)
harryPotter.publish()
console.log(harryPotter)
