//Endpoints del proyecto
//Endpoint: Ruta REST en un proyecto API Backend
// Ej: http://localhost:5000/personas/4
//          Un endpoint solo exponen info en formato JSON
import { addcanciones,
         getcanciones, 
         getcancionesById, 
         deletecanciones } from "../controllers/ContactoController.js"

const rutas = (  app ) => {
        app.route('/canciones')
                  .get( getcanciones)
                  .post(addcanciones)
        app.route('/canciones/:cancionesid')   
                  .get(getcancionesById) 
                  app.route('/canciones/delete/:cancionesid')
                  .get(deletecanciones) 
                       
}

export default rutas

