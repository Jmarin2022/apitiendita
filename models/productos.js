const {Schema, model} = require('mongoose')

const ProdutosSchema = Schema({
    idproducto:{
        type: Number
    },
    nombre:{
        type: String
    },
    precio:{
        type: Number
    },
    stock:{
        type: Number
    },
    Tipo:{
        type:  String
    },
    Stock_min:{
        type: Number
    },
    Stock_max:{
        type: Number
    },
    Estado:{
        type: String
    }
})


module.exports = model('Productos',ProdutosSchema)