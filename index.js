//instalar dependencias
import express from "express"
import rutas from "./rutas/rutas.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"


//crear objetos express
const app  = express()
const PUERTO = 5000

//crear la conexion a mongo:
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/canciones")


//body-parser configuracion
app.use(bodyParser.urlencoded( { extended:true } ))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//traer las rutas
rutas(app)

//crear el servidor de pruebas:
app.listen( PUERTO , function(){
    console.log( `Servidor de desarrollo ejecutando en puerto ${PUERTO}` )
}) 