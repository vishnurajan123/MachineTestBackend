const mongoose=require('mongoose')

const carSchema=new mongoose.Schema({
    category:{
        type:String
    },
    car:{
        type:String
    },
    parentCategoryId:{
        type:String,
        required:true
    }
    
   

})

const cars=mongoose.model("cars",carSchema)
module.exports=cars