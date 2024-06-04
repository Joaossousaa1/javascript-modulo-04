module.exports = class Transfer {
    constructor(fromUser, toUser, value, date = new Date()) {
        this.fromUser = fromUser 
        this.toUser = toUser
        this.value = value
        this.date = date
    }
}