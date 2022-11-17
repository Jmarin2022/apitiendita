const { response } = require('express')
const Ventas = require('../models/ventas')

const getVentas = async (req, res = response)=>{
    const ventas = await Ventas.find()
    res.json({
        msg: 'Get API ventas',
        ventas
    })
}

const postVentas = async(req,res)=>{
    //Desestructuracion
    const{idventas,
        cliente,
        Fecha}=req.body
    //instanciar el objeto con los parametros y recibirlos
    const ventas = new Ventas({idventas,
        cliente,
        Fecha})

    await ventas.save()

    res.json({
        msg: 'POST API ventas',
        idventas,
cliente,
Fecha
    })
}
const putVentas = async (req,res)=>{
    const{
        clienteanterior,clientenuevo,
        Fecha}=req.body
    const ventas=await Ventas.findOneAndUpdate({cliente:clienteanterior},{cliente:clientenuevo,Fecha:Fecha})
    res.json({
        msg: 'PUT API ventas',
        ventas
    })
}
const patchVentas = async(req,res)=>{
    const{
        cliente,
        Fecha}=req.body
    const vetas = Ventas.findByIdAndUpdate({cliente:cliente},{Fecha:Fecha})
}

const deleteVentas = async(req,res)=>{
    const {cliente}= req.query

    const ventas = await Ventas.findOneAndDelete({cliente:cliente})
    res.json({
        msg: 'DELETE API ventas',
        ventas
    })
}
module.exports={
    getVentas,
    postVentas,
    putVentas,
    patchVentas,
    deleteVentas
}
