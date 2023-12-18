const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3,'Must be atleast 3,got {VALUE}']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }

        }
    },
    password:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isStrongPassword([value,{minLength: 5, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}])){
                throw new Error("Invalid password")
            }

        }

       
    },
   
    phone:{
        type:String,
        required:true,


    },
   

})

const users=mongoose.model("users",userSchema)
module.exports=users