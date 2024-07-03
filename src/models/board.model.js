import { Schema, model } from "mongoose";

const collection = "boards" //ingles, plural, minusculas. SIEMPRE

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps: true})

const Board = model(collection, schema);
export default Board