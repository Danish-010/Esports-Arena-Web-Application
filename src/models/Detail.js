const mongoose = require("mongoose")
const Detail = mongoose.Schema({
    brandname: String,
    brand_icon_url: String,
    links: [
        {
            label: String,
            url: String,
        }
    ]
})
module.exports = mongoose.model("detail", Detail)