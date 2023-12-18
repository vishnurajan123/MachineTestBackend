const cars=require('../Models/carSchema')
// add new
exports.addItem=async(req,res)=>{
    const {category,car,parentCategoryId}=req.body
    try{
        const newItem=new cars({
            category,car,parentCategoryId
        })
        await newItem.save()
        res.status(200).json(newItem)
    }
    catch (err){
        res.status(401).json(err)
    }
}
