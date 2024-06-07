Create: 21/05/2024 às 11:10

# **O que é Instância?**

Uma instância de uma [[Classe]] é um novo objeto criado dessa classe, com o operador new. Instanciar uma classe é criar um novo objeto do mesmo tipo dessa classe. Uma classe somente poderá ser utilizada após ser instanciada.

Então ao modelar um sistema de notas fiscais, as notas e seus itens são objetos; e ao codificar o sistema, classes serão declaradas para definir estes objetos, e para que estes objetos existam na [[Memória]] serão criadas instâncias destas classes.

Classe:
```JavaScript
class NotaFiscal{...} // não é objeto nem instância, é a definição de um objeto.
```
Instância:
```JavaScript
const notaFiscal = new NotaFiscal(); // "notaFiscal" referencia uma instância
```
Objeto:
```JavaScript
notaFiscal.setNumero(1234);  // a instância representa a Nota Fiscal 1234, que é um objeto de domínio e existe como objeto para além do código fonte.
```

Depois de os objetos serem persistidos as instâncias são removidas da memória e os objetos como os conhecemos no mundo real estarão seguros na base de dados até que precisemos lidar com eles novamente - e daí novamente vamos criar instâncias das suas classes para poder olhar para estes belos objetos e manipulá-los