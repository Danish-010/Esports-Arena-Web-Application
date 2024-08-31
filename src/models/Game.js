import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const gameSchema = new Schema({
    icon: String,
    title: String,
    description: String,
    linktext: String,
    link: String,
    teamlink: String,
});

export default model('Game', gameSchema);
