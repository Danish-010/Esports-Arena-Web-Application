const express=require('express')
const Detail=require("../models/Detail")
const Game = require('../models/Game')
const Slider = require("../models/Slider")
const Contact =require("../models/Contact")
const routes=express.Router()
routes.get("/",async(req,res)=>{
    const details=await Detail.findOne({"_id":"63d5651fee5777efe602c3bd"})
    const slides=await Slider.find()
    // console.log(details)
    // console.log(slides)
    const game=await Game.find()
    res.render("index",{
        details:details,
        slides:slides,
        game:game
    });
});
// process contact form
routes.post("/process-contact-form",async(request,response)=>{
    console.log("Form is submitted")
    console.log(request.body)
    //save the data to database from form
    try{ 
        const data= await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    }
    catch(e){
        console.log(e)
        response.redirect("/")
    }
})
module.exports=routes;   