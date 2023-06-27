const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isPremiumUser: {
        type: Boolean,
        ref: 'Order',
        default: null
    },
    totalExpenses: {
        type: Number,
        ref: 'Expenses',
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)