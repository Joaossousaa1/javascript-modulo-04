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
Reservation.coupon = Reservation.baseFee - ((Reservation.baseFee / 100) * 45) 
r1.useCoupon('A1B2C3')
console.log(Reservation.coupon)