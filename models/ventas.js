const {Schema, model} = require('mongoose')

const VentasSchema = Schema({
    idventas:{
        type: Number
    },
    cliente:{
        type: String
    },
    Fecha:{
        type: String
    }
})


module.exports = model('Ventas',VentasSchema)