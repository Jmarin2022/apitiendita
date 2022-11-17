const { response } = require('express')
const Productos = require('../models/productos')

const getProductos = async (req, res = response) => {
   // const { nombre, raza, peso } = req.query
   const productos = await Productos.find()
    res.json({
        msg: 'GET API productos',
        productos
    })
}

const postProductos = async (req, res) => {
    //Desestructuracion
    const { idproducto,
        nombre,
        precio,
        stock,
        Tipo,
        Stock_min,
        Stock_max,
        Estado } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const productos = new Productos({ idproducto,
        nombre,
        precio,
        stock,
        Tipo,
        Stock_min,
        Stock_max,
        Estado })


    await productos.save()

    res.json({
        msg: 'POST API productos',
        productos
    })
}

const putProductos = async( req, res )=> {
    // Destructuración 

    const { nombreAnterior, nombreNuevo,precio,stock,Tipo,Stock_min,Stock_max,Estado} = req.body
const productos = await Productos.findOneAndUpdate({nombre: nombreAnterior}, {nombre:nombreNuevo, precio:precio,stock:stock,Tipo:Tipo,Stock_min:Stock_min,Stock_max:Stock_max,Estado:Estado})
    res.json({
    msg: 'PUT API Productos',
    productos})
}

const patchProductos = async(req, res ) => {
    const { nombre, precio } = req.body
    const productos = Mascota.findByIdAndUpdate({nombre: nombre}, {precio: precio})
}



const deleteProductos = async( req, res ) => {
    const { nombre } = req.query

    const productos = await Productos.findOneAndDelete({nombre : nombre })
    res.json({
        msg:'DELETE API productos',
        productos
    })
}

module.exports = {
    getProductos,
    postProductos,
    putProductos,
patchProductos,
    deleteProductos
}