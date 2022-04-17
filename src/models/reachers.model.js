const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    id: { type:Number, required: true },
    name: { type:String, required: true },
    img:{ type:String, required: true },
    category: [{ type:String, required: true }],
    averagecost: { type:String, required: true },
    img1:{ type:String, required: true },
    location:{ type:String, required: true },
    
})

module.exports = mongoose.model("teachers", adminSchema)