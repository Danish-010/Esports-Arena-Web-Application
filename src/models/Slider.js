import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const sliderSchema = new Schema({
    title: String,
    subtitle: String,
    imageurl: String,
    class: String,
});

export default model('Slider', sliderSchema);
