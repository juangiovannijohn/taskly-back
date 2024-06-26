import express from 'express'
import cors from "cors"
import morgen from "morgan"
import "dotenv/config.js"
import errorHandler from './src/middlewares/errorHandler.js'
import notFoundPath from './src/middlewares/notFoundPath.js'
import connectToMongo from './src/db/mongo.js'

const server = express()

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || ''
const ready = ()=> {
    console.log('server ready on port ' + PORT)
    connectToMongo(MONGO_URI);
}

server.listen(PORT,ready)

//midd terceros
server.use(express.urlencoded({extended:true})) // habilita a express a leer query y params en la url
server.use(express.json())
server.use(cors())
server.use(morgen("dev"))

//midd propios


server.get('/', (req,res,next)=>{
    try {
        return res.status(200).json({
            message: 'OK'
        })
    } catch (error) {
        return next(error)
    }
})
server.use(errorHandler);
server.use(notFoundPath);