import 'dotenv/config.js'
import connectToMongo from "../mongo.js"
import Card from '../../models/cards.model.js';

const cards = [
    {
      title: 'Primera Task de Título de ejemplo',
      content: 'Contenido de la primera tarea para el Título de ejemplo',
      list_id: '60d0fe4f5311236168a109ca' // Ejemplo de ObjectId
    },
    {
      title: 'Segunda Task de Título de ejemplo',
      content: 'Contenido de la segunda tarea para el Título de ejemplo',
      list_id: '60d0fe4f5311236168a109ca' // Ejemplo de ObjectId
    },
    {
      title: 'Tercera Task de Título de ejemplo',
      content: 'Contenido de la tercera tarea para el Título de ejemplo',
      list_id: '60d0fe4f5311236168a109ca' // Ejemplo de ObjectId
    },
    {
      title: 'Primera Task de Primer ejemplo de título',
      content: 'Contenido de la primera tarea para el Primer ejemplo de título',
      list_id: '60d0fe4f5311236168a109cb' // Ejemplo de ObjectId
    },
    {
      title: 'Segunda Task de Primer ejemplo de título',
      content: 'Contenido de la segunda tarea para el Primer ejemplo de título',
      list_id: '60d0fe4f5311236168a109cb' // Ejemplo de ObjectId
    },
    {
      title: 'Tercera Task de Primer ejemplo de título',
      content: 'Contenido de la tercera tarea para el Primer ejemplo de título',
      list_id: '60d0fe4f5311236168a109cb' // Ejemplo de ObjectId
    },
    {
      title: 'Primera Task de Segundo ejemplo de título',
      content: 'Contenido de la primera tarea para el Segundo ejemplo de título',
      list_id: '60d0fe4f5311236168a109cc' // Ejemplo de ObjectId
    },
    {
      title: 'Segunda Task de Segundo ejemplo de título',
      content: 'Contenido de la segunda tarea para el Segundo ejemplo de título',
      list_id: '60d0fe4f5311236168a109cc' // Ejemplo de ObjectId
    },
    {
      title: 'Tercera Task de Segundo ejemplo de título',
      content: 'Contenido de la tercera tarea para el Segundo ejemplo de títuloas aksdaskj sakdjask asdkja k sakdjas kas dkasj kasdj ',
      list_id: '60d0fe4f5311236168a109cc' // Ejemplo de ObjectId
    }
  ];
  

async function createData(Model) {
   try {
    connectToMongo(process.env.MONGO_URI)
      await Model.insertMany(cards)
      console.log("Cards created")
   } catch (err) {
      console.log(err)
   }
}
createData(Card)