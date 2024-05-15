//PascalCase
function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.inStock = false
    this.addOnStock =  function addOnStock(quantity)  {
        this.inStock += quantity
    }
    this.addPage = (quantity) => {
        this.pages += quantity
    }
}

const eragon = new Book('Harry Potter', 100, ['Fantasy', 'Action'], 'João Otávio')
console.log(eragon)
eragon.addOnStock(5)
eragon.addPage(8)
console.log(eragon)