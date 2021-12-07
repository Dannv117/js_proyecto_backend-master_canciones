import mongoose from 'mongoose'

//Definir un objeto Schema 
const Schema = mongoose.Schema

//Definir la estructura de las entidades 
//a registrar

const cancionesSchema = new Schema(
    {
        nombre: {
            type: String,
            required: "nombre vacio"
        },
        cantante: {
            type: String,
            required: "cantante vacio"
        },genero: {
            type:String,
            required: "genero vacio"
        },

    }
)

export default cancionesSchema