import { connect } from "mongoose";

async function connectToMongo(uri){
    try {
        await connect(uri);
        console.log('DB is OK')
    } catch (error) {
        console.log(error)
    }
}

export default connectToMongo