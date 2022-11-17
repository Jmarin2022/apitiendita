const { response } = require('express')
const Roles = require('../models/roles')

const getRoles = async (req, res = response)=>{
    const roles = await Roles.find()
    res.json({
        msg: 'Get API roles',
        roles
    })
}

const postRoles = async(req,res)=>{
    //Desestructuracion
    const{idrol,Rol,Fecha}=req.body
    //instanciar el objeto con los parametros y recibirlos
    const roles = new Roles({idrol,Rol,Fecha})

    await roles.save()

    res.json({
        msg: 'POST API roles',
        idrol,Rol,Fecha
    })
}
const putRoles = async (req,res)=>{
    const{Rolanterior,Rolnuevo,Fecha}=req.body
    const roles=await Roles.findOneAndUpdate({Rol:Rolanterior},{Rol:Rolnuevo,Fecha:Fecha})
    res.json({
        msg: 'PUT API roles',
        roles
    })
}
const patchRoles = async(req,res)=>{
    const{Rol,Fecha}=req.body
    const roles = Roles.findByIdAndUpdate({Rol:Rol},{Fecha:Fecha})
}

const deleteRoles = async(req,res)=>{
    const {Rol}= req.query

    const rol = await Roles.findOneAndDelete({Rol:Rol})
    res.json({
        msg: 'DELETE API Rol',
        rol
    })
}
module.exports={
    getRoles,
    postRoles,
    putRoles,
    patchRoles,
    deleteRoles
}
