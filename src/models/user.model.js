import { Schema, model } from "mongoose";

const collection = "users" //ingles, plural, minusculas. SIEMPRE

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
        default: ''
    },
    age:{
        type: Number,
        required: false,
    },
    name: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    }

},{timestamps: true})

const User = model(collection, schema);
export default User