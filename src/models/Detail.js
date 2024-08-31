import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const detailSchema = new Schema({
    brandname: String,
    brand_icon_url: String,
    links: [
        {
            label: String,
            url: String,
        },
    ],
});

export default model('Detail', detailSchema);
