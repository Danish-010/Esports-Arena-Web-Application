import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    email: String,
    phone: String,
    query: String,
});

export default model('Query', contactSchema);
