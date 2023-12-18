const users=require('../Models/userSchema')

// register
exports.register=async (req,res)=>{
    const {username,email,password,phone}=req.body
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exists !!! Please login...")

        }
        else{
            const newUser=new users({
                username,email,password,phone
            })

            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json(`Register API Failed , Error: ${err}`)
    }
}
// login

exports.login=async (req,res)=>{

    const {email,password}=req.body
    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            res.status(200).json({
                existingUser
            })
        }
        else{
            res.status(404).json("Invalid email or password")
        }
    }
    catch(err){
        res.status(401).json(`Login API Failed , Error: ${err}`)
    }
}