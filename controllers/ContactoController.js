import mongoose from 'mongoose'
import cancionesSchema from '../models/ContactoModel.js'

//DAO de Contacto
const canciones = mongoose.model('canciones' , cancionesSchema)

//accion de controlador: insertar nueva Persona
export const addcanciones = ( request , response ) => {
    //crear nueva Persona:
    let nuevacancion = new canciones( request.body )
    //grabar la nueva persona
    nuevacancion.save( (error , canciones) => {
        if(error){
            response.send(error)
        }else{
            response.json(canciones)
        }
    })
}

//accion para seleccionar todas las personas
export const getcanciones = (request , response) => {
    canciones.find( {} ,   (error , canciones) => {
        if(error){
            response.send(error)
        }else{
            response.json(canciones)
        }
    }   )
}

//accion de detalle de persona
export const getcancionesById = (request , response ) => {
    canciones.findById( request.params.cancionesid ,   (error , canciones) => {
        if(error){
            response.send(error)
        }else{
            response.json(canciones)
        }
    }   )
}

//accion borrar: 
export const deletecanciones = (request , response ) => {
    canciones.deleteOne( { _id: request.params.cancionesid } , (error ,canciones ) =>{
           if(error){
               response.send(error)
           }
           else{
               response.json({ mensaje: "canción borrada"})
           } 
    })
}



