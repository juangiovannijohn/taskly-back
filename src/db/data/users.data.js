import 'dotenv/config.js'
import connectToMongo from "../mongo.js"
import User from '../../models/user.model.js'

let users = [
    {
        email: "rodriguezjuanm@live.com",
        password: "#EF8481",
        age: 34,
        avatar: '',
        name: 'juan',
        city: ''
    },{
        email: "phjuanrodriguez@gmail.com",
        password: "#EF8481",
        age: 34,
        avatar: '',
        name: 'juan',
        city: ''
    }
]

async function createData(Model) {
   try {
    connectToMongo(process.env.MONGO_URI)
      await Model.insertMany(users)
      console.log("data created")
   } catch (err) {
      console.log(err)
   }
}
createData(User)