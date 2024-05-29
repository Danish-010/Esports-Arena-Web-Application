const mongoose=require("mongoose")
const Game=mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linktext:String,
    link:String,
    teamlink:String,
})
module.exports=mongoose.model("game",Game)