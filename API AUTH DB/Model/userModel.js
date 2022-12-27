const mongoose = require("mongoose")

const userModel = mongoose.model("users", {
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
})

module.exports = userModel