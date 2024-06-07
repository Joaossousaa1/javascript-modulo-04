Create: 31/05/2024 às 11:17

### **O que são Atributos e Métodos Estáticos?**
São atributos e métodos definidos em uma classe que não dependem de uma instância para serem utilizados, ou seja, eu não preciso criar uma instância para usar esses [[Atributos]] ou [[Métodos]]. 
São acessados diretamente pela classe ao invés de por uma instância.

Por exemplo: quando eu vou criar uma classe que precisa ter um atributo global com o mesmo valor para todas as instâncias, ai eu uso um atributo estático.

```JavaScript
class Reservation {

    constructor(guests, room, day) {
        this.guests = guests
        this.room = room
        this.day = day
        this.total = day * Reservation.baseFee
    }
  
    static baseFee = 150 //Atributo estático
    static coupon = 0
    
    static showBaseFee() { //Método estático
        console.log(`This base fee is ${Reservation.baseFee}`)
    }
  
    static get showPremiumBaseFee() { //Static + acessadores
        return `This base fee coupon is ${Reservation.coupon}`
    }
  
    static set coupon(baseFee) { //Static + acessadores
        Reservation.coupon = baseFee
    }
  
    useCoupon(coupon) {
        if (coupon === 'A1B2C3' ) {
            console.log(`Discount coupon insered.`)
            this.total = this.day * Reservation.coupon
        } else {
            throw Error ('Discount coupon incorrect.')
        }
    }
}
  
const r1 = new Reservation(2, '1001', 3)
Reservation.coupon = 
r1.useCoupon('A1B2C3')
```