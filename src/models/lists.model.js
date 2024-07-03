import { Schema, model } from "mongoose";

const collection = "lists" //ingles, plural, minusculas. SIEMPRE

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    board_id: {
        type: Schema.Types.ObjectId,
        ref: 'Board',
        required: true,
    }
},{timestamps: true})

const List = model(collection, schema);
export default List