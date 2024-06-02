const User = require("../User")

module.exports = function registerUser(username, adress, phone, library) {
    const user = new User(username, adress, phone)
    library.registerUser(user)

    return user
}