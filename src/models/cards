import { Schema, model } from "mongoose";

const collection = "cards" //ingles, plural, minusculas. SIEMPRE

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false
    },
    list_id: {
        type: Schema.Types.ObjectId,
        ref: 'List',
        required: true,
    }
},{timestamps: true})

const Card = model(collection, schema);
export default Card