const {Schema, model} = require('mongoose')

const RolesSchema = Schema({
    idrol:{
        type: Number
    },
    Rol:{
        type: String
    },
    Fecha:{
        type: String
    }
})


module.exports = model('Roles',RolesSchema)